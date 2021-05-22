import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = (movie) => (
  <div className="ui two buttons">
    <Button animated as={Link} to={`/movie/edit/${movie._id}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name="edit" />
      </Button.Content>
    </Button>
    <Button animated="vertical">
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name="trash" />
      </Button.Content>
    </Button>
  </div>
);

const MovieCard = ({ movie }) => (
  <Grid.Column>
    <Card>
      <Image src={movie.photo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {new Date(movie.registrationDate).toDateString()}
          </span>
        </Card.Meta>
        <Card.Description>
          {movie.Director.name} {movie.Director.surname}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {movie.country} / {movie.category}
      </Card.Content>
      {localStorage.getItem("token") && <Card extra={extra(movie)} />}
    </Card>
  </Grid.Column>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
