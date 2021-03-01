import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MoviesList } from "../components";
import { fetchMovies } from "../store/actions/movies";

const Movies = (props) => {
  useEffect(() => {
    (() => {
      props.fetchMovies();
    })();
  }, []);

  return (
    <div>
      <p>Movies Page</p>
      <MoviesList movies={props.movies} />
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
