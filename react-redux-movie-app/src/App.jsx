import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Footer, Header } from "./components";
import { authenticate } from "./store/actions/users";
import { Movies, AddMovie } from "./pages";
import "./App.css";

function App(props) {
  useEffect(() => {
    (() => {
      if (!localStorage.getItem("token")) {
        props.authenticate();
      }
    })();
  }, []);
  return (
    <div className="App">
      <Header />
      <Container text>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/movie/new" component={AddMovie}></Route>
        <Route path="/movie/:id" component={AddMovie}></Route>
      </Container>
      <Footer />
    </div>
  );
}

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
