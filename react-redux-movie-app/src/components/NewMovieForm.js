import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";

function NewMovieForm() {
  const [form, setForm] = React.useState({
    title: "",
    director_id: "",
    photo: "",
    category: "",
    country: "",
    year: "",
    imdb_score: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <Grid columns={2}>
        <Grid.Column>
          <Form.Field>
            <label>Movie Title</label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Director ID</label>
            <input
              id="director_id"
              name="director_id"
              value={form.director_id}
              onChange={handleChange}
              placeholder="Director ID"
            />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
        <Grid.Column>
          <Form.Field>
            <label>Photo URL</label>
            <input
              id="photo"
              name="photo"
              value={form.photo}
              onChange={handleChange}
              placeholder="Photo URL"
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Category</label>
            <input
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <Form.Field>
            <label>Country</label>
            <input
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>Year</label>
            <input
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Year"
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field>
            <label>IMDB Score</label>
            <input
              id="imdb_score"
              name="imdb_score"
              value={form.imdb_score}
              onChange={handleChange}
              placeholder="IMDB Score"
            />
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
