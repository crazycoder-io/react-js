import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MoviesList } from "../components";
import { fetchMovies } from "../store/actions/movies";

const Movies = (props) => {
  const { error, loading, movies } = props;
  useEffect(() => {
    (() => {
      props.fetchMovies();
    })();
  }, []);

  return (
    <div>
      {loading && <h3>Loading</h3>}
      {error && <h3>{error}</h3>}
      {!error && !loading && movies && <MoviesList movies={movies} />}
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
