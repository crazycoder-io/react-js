import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { MoviesList } from "../components";
import { fetchMovies } from "../store/actions/movies";
import { deleteMovie } from "../store/actions/deleteMovie";
import "../styles/movies.css";

const Movies = (props) => {
  const { error, loading, movies } = props;
  useEffect(() => {
    (() => {
      props.fetchMovies();
    })();
  }, []);

  return (
    <div>
      {loading && (
        <div className="loading-container">
          <PacmanLoader loading={true} />
        </div>
      )}
      {error && <h3>{error}</h3>}
      {!error && !loading && movies && (
        <MoviesList movies={movies} deleteMovie={props.deleteMovie} />
      )}
    </div>
  );
};

Movies.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
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
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
