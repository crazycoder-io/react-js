import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";

function NewMovieForm() {
  return (
    <Form>
      <Grid columns={2}>
        <Grid.Column>
          <Form.Field>
            <label>Movie Title</label>
            <input placeholder="Title" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Director ID</label>
            <input placeholder="Director ID" />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
        <Grid.Column>
          <Form.Field>
            <label>Photo URL</label>
            <input placeholder="Photo URL" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Category</label>
            <input placeholder="Category" />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <Form.Field>
            <label>Country</label>
            <input placeholder="Country" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Year</label>
            <input placeholder="Year" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>IMDB Score</label>
            <input placeholder="IMDB Score" />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid columns={1}>
        <Grid.Column>
          <Button type="submit">Submit</Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
}

export default NewMovieForm;
