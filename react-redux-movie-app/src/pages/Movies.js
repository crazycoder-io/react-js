import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MoviesList } from "../components";

const Movies = (props) => {
  return (
    <div>
      <p>Movies Page</p>
      <MoviesList movies={props.movies} />
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
