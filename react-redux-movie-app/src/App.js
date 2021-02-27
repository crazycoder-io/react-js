import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Footer, Header } from "./components";
import { Movies } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container text>
        <Route path="/movies" component={Movies}></Route>
        <hr />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
