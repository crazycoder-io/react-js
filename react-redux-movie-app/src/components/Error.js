import React from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/new-movie.css";

function Error({ errorText }) {
  return (
    <div>
      <p id="error">{errorText}</p>
    </div>
  );
}

Error.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default Error;
