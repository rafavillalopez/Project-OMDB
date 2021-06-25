const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express();


const { User } = require("./models");
const db = require("./db");


app.use(morgan("dev"));

// Express Route File Requires
const routes = require("./routes");
app.use(express.static(path.resolve(__dirname, "./src/public")));

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Sessions
app.use(session({ secret: "elgatomu", resave: true, saveUninitialized: true }));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) return done(null, false); // user not found

        const hash = await user.hash(password, user.salt);

        if (hash !== user.password) return done(null, false); // invalid password

        done(null, user); // success :D
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser( (user, done) =>{
  done(null, user.id);
});

passport.deserializeUser( (id, done)=> {
  User.findByPk(id).then((user) => done(null, user));
});

// Express Routing
app.use("/api", routes);

(async function runServer() {
  try {
    await db.sync({ force: false });
    console.log("Nos hemos conectado a la base de datos");
    app.listen(3001, () => {
      console.log(`La app ha arrancado en http://localhost:${3001}`);
    });
  } catch (err) {
    console.log("Se ha producido un error", err);
  }
})();
