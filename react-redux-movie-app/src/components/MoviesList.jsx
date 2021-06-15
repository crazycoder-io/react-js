import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { MovieCard } from "../components";

function MoviesList({ movies, deleteMovie }) {
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = (
    <Grid stackable columns={3}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </Grid>
  );

  return movies.length > 0 ? moviesList : emptyMessage;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MoviesList;
