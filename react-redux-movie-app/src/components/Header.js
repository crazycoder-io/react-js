import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";

const Header = () => {
  const [state, setState] = React.useState({
    menuFixed: false,
    overlayFixed: false,
  });

  const stickTopMenu = () => setState({ menuFixed: true });
  const unStickTopMenu = () => setState({ menuFixed: false });

  return (
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
  );
};

export default Header;
