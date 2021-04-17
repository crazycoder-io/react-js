import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { MovieCard } from "../components";

function MoviesList({ movies }) {
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = (
    <Grid stackable columns={3}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </Grid>
  );

  return movies.length > 0 ? moviesList : emptyMessage;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
