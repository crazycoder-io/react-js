import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MovieForm } from "../components";
import { newMovieSubmit } from "../store/actions/newMovie";
import { fetchMovie } from "../store/actions/movies";
import { updateMovie } from "../store/actions/updateMovie";
import { HashLoader } from "react-spinners";

function NewMovie(props) {
  useEffect(() => {
    (() => {
      if (!localStorage.getItem("token")) {
        alert("You are not admin, go away 😜");
        window.location.href = "/";
      }
      if (props.match.params.id && !props.editMovie) {
        props.fetchMovie(props.match.params.id);
      }
    })();
  }, []);

  return (
    <div>
      {props.loading && (
        <div className="loading-container">
          <HashLoader loading={true} color={"blue"} />
        </div>
      )}
      <p>{props.match.params.id ? "Edit Movie" : "Add New Movie"}</p>
      <MovieForm
        editMovie={props.editMovie ? props.editMovie : props.movie}
        newMovieSubmit={props.newMovieSubmit}
        editMovieSubmit={props.updateMovie}
        loading={props.loading}
        error={props.error}
        status={props.status}
      />
    </div>
  );
}

NewMovie.propTypes = {
  movie: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  status: PropTypes.bool,
  newMovieSubmit: PropTypes.func.isRequired,
  updateMovie: PropTypes.func,
  editMovie: PropTypes.object,
  match: PropTypes.object,
  fetchMovie: PropTypes.func,
};

const mapStateToProps = ({ newMovie, movies }, props) => ({
  movie: newMovie.movie,
  error: newMovie.error,
  loading: newMovie.loading,
  status: newMovie.status,
  editMovie: movies.movies.find((item) => item._id === props.match.params.id),
});

const mapDispatchToProps = { newMovieSubmit, fetchMovie, updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
