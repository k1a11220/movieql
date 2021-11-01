let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 10,
  },
  {
    id: 1,
    name: "Avengers",
    score: 3,
  },
  {
    id: 2,
    name: "Dear Evan Hansen",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movies) => movies.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
