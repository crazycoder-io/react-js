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
import { menuStyle, fixedMenuStyle } from "./helpers/styleHelper";

function App() {
  const [state, setState] = React.useState({
    menuFixed: false,
    overlayFixed: false,
  });
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
            <Menu.Item as={Link} to="/movies">
              Movies
            </Menu.Item>
            <Menu.Item as="a">Add New</Menu.Item>
          </Container>
        </Menu>
      </Visibility>

      <Container text>
        <Route path="/movies" component={Movies}></Route>
        <hr />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        necessitatibus veritatis delectus, illo hic veniam. Ipsum perspiciatis
        eaque dolores temporibus esse hic optio neque? Blanditiis reprehenderit
        laborum unde quidem sed. Voluptas quis temporibus deserunt inventore
        assumenda aliquid nostrum ratione aperiam id vel ducimus eligendi
        quaerat, ab architecto itaque ipsa voluptates voluptatem earum expedita
        autem qui. Fugiat quod earum dolores pariatur? Distinctio eveniet ab
        alias deleniti dolores perspiciatis minima! Ut incidunt amet voluptatum
        porro consequuntur quaerat placeat doloribus nostrum nesciunt quis, cum
        dolores necessitatibus libero perspiciatis, ipsum molestias, ex maiores.
        Praesentium. Cumque soluta, odio unde ipsum quisquam aut hic suscipit,
        totam ut distinctio in quos facere tenetur, sapiente inventore expedita!
        Aspernatur maxime perferendis obcaecati enim! Vitae quos harum quia
        provident ipsam? Sequi optio deleniti id molestias, molestiae eveniet
        eum quisquam ea sit consectetur placeat illum inventore vitae vel
        assumenda perferendis at accusantium vero iure dolor autem nisi non.
        Recusandae, deserunt cum. Iusto assumenda consectetur eveniet eius fuga
        doloremque expedita modi error. Voluptatem officia nisi autem fugit,
        aperiam ipsum recusandae sapiente harum esse hic a neque tenetur, earum
        sit ipsa quibusdam in? A nemo enim animi! Soluta, ipsa nostrum! Modi
        distinctio rem minima quam earum perferendis quod error animi laboriosam
        dolore odio harum iusto, dolores voluptatibus corporis aliquid impedit
        alias nemo illo. Necessitatibus quas consequatur ipsa at vitae
        blanditiis iusto, doloribus dolores odit voluptatibus minus fugiat eius
        impedit deserunt facere cumque voluptatum laudantium! Necessitatibus
        harum vel eos esse, adipisci optio aspernatur. Non. Laudantium, officia
        minima. Enim, debitis eos tempore fugit laborum assumenda veniam autem
        dicta officia sed, sapiente blanditiis dolorem non, saepe consequatur
        excepturi fugiat ex recusandae voluptate adipisci maiores vel
        architecto! Perspiciatis repellendus quod eaque ad sunt nihil quidem non
        voluptatem. Est sit maiores quisquam sunt quaerat sequi. Tenetur
        obcaecati tempora exercitationem. Praesentium amet dolores, ducimus fuga
        quisquam rem sed. Eos?
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
