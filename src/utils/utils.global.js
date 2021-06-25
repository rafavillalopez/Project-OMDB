import axios from "axios";

export const getMovioById = async (idArray) => {
  const res = await Promise.all(
    idArray?.map((x) =>
      axios.get(
        `https://www.omdbapi.com/?apikey=a72d9535&i=${x.movieId}&plot=full`
      )
    )
  );
  console.log(
    "RESS",
    res.map((x) => x.data)
  );
  return res.map((x) => x.data);
};
