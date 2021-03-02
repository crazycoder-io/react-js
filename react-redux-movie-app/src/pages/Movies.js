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
      {props.loading && <h3>Loading</h3>}
      {props.error && <h3>{props.error}</h3>}
      {!props.error && props.movies && <MoviesList movies={props.movies} />}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.shape({ type: PropTypes.array }).isRequired,
  fetchMovies: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies,
  error: movies.error,
  loading: movies.loading,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
