import React from "react";
import { Link, Route } from "react-router-dom";
import { Movies } from "./pages";
import "./App.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { menuStyle, overlayStyle, fixedMenuStyle } from "./helpers/styleHelper";

function App() {
  const [state, setState] = React.useState({
    menuFixed: false,
    overlayFixed: false,
  });

  const stickOverlay = () => setState({ overlayFixed: true });
  const unStickOverlay = () => setState({ overlayFixed: false });
  const stickTopMenu = () => setState({ menuFixed: true });
  const unStickTopMenu = () => setState({ menuFixed: false });

  return (
    <div className="App">
      <Visibility
        onBottomPassed={stickTopMenu}
        onBottomVisible={unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={state.menuFixed ? "top" : undefined}
          style={state.menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item>
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Item header>takilio</Menu.Item>
            <Menu.Item as="a">
              <Link to="movies">Movies</Link>
            </Menu.Item>
            <Menu.Item as="a">Add New</Menu.Item>
          </Container>
        </Menu>
      </Visibility>

      <Container text>
        <Visibility
          offset={80}
          once={false}
          onTopPassed={stickOverlay}
          onTopVisible={unStickOverlay}
          style={
            state.overlayFixed ? { ...overlayStyle, ...state.overlayRect } : {}
          }
        />
        <Route path="/movies" component={Movies}></Route>
      </Container>

      <Segment
        inverted
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        vertical
      >
        <Container textAlign="center">
          <Grid columns={4} divided stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <Image
            src="https://react.semantic-ui.com/logo.png"
            centered
            size="mini"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
