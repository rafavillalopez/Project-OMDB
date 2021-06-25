export const isInFavorites = (favorites, id) => {
  return favorites.some((movie) => {
    if (movie["imdbID"]) return movie["imdbID"] === id;
    return movie.movieId === id;
  });
};

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
