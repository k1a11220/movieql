import { getMovies, getById, addMovie, deleteMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    // person: () => getById(),
    movie: (_, { id }) => getById(id),
    // person: () => people, //function() { return beomsoo } 의 단축문법
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
