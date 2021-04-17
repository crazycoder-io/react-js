import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MovieForm } from "../components";
import { newMovieSubmit } from "../store/actions/newMovie";

function NewMovie(props) {
  return (
    <div>
      <p>Add New Movie</p>
      <MovieForm
        newMovieSubmit={props.newMovieSubmit}
        loading={props.loading}
        error={props.error}
      />
    </div>
  );
}

NewMovie.propTypes = {
  movie: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  newMovieSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ newMovie }) => ({
  movie: newMovie.movie,
  error: newMovie.error,
  loading: newMovie.loading,
});

const mapDispatchToProps = { newMovieSubmit };

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
