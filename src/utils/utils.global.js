import axios from "axios";

export const getMovioById = async (idArray) => {
  const res = await Promise.all(
    idArray?.map((x) =>
      axios.get(
        `https://www.omdbapi.com/?apikey=a72d9535&i=${x.movieId}&plot=full`
      )
    )
  );

  return res.map((x) => x.data);
};

const listOfIds = [
  "tt4154796",
  "tt1375666",
  "tt0325980",
  "tt0944947",
  "tt2084970",
  "tt1515091",
  "tt4154796",
  "tt0119174",
  "tt1731141",
  "tt2704998",
  "tt4209788",
  "tt0266987",
  "tt4154796",
  "tt1375666",
  "tt0325980",
  "tt0944947",
  "tt3748172",
  "tt0492956",
  "tt1201607",
  "tt0241527",
  "tt0295297",
  "tt0304141",
  "tt0304141",
  "tt0330373",
  "tt0373889",
  "tt0926084",
  "tt0417741",
  "tt0098635",
  "tt0066999",
];

const randomGenerator = () => {
  return Math.floor(Math.random() * listOfIds.length);
};

export const generateRamdomId = () => {
  let arr = [];

  while (arr.length < 4) {
    let n = randomGenerator();
    if (!arr.includes(listOfIds[n])) arr.push(listOfIds[n]);
  }
  return arr;
};

export const movie = {
  Poster:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png",
};

export const user = {
  name: "No Users",
  favorites: [],
};

export const NotEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key] === "") return false;
  }
  return true;
};
