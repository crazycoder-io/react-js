import React from "react";
import PropTypes from "prop-types";

function MoviesList({ movies }) {
  const emptyMessage = <p>There are no movies yet</p>;

  const moviesList = <div>Movies List</div>;

  return <div>{movies.length > 0 ? moviesList : emptyMessage}</div>;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
