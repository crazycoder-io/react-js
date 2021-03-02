import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const MovieCard = ({ movie }) => (
  <Grid.Column>
    <Card>
      <Image src={movie.photo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </Grid.Column>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
