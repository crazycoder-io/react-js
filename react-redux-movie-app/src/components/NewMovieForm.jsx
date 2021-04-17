import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Grid, Message } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { InlineError } from "../components";

function NewMovieForm(props) {
  const [form, setForm] = React.useState({
    title: "",
    director_id: "",
    photo: "",
    category: "",
    country: "",
    year: "",
    imdb_score: "",
  });
  const [errors, setError] = React.useState(false);

  const validate = () => {
    for (const key in form) {
      if (!form[key] || form[key] === "") {
        setError((prev) => ({
          ...prev,
          [key]: `${key} cannot be blank!`,
        }));
      }
    }
    return errors;
  };

  const onSubmit = () => {
    const error = validate();
    if (typeof error === "object" && Object.keys(error).length === 0) {
      props.newMovieSubmit(form);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setError((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };
  return (
    <div>
      {props.status ? (
        <Redirect to="/movies" />
      ) : (
        <Form onSubmit={onSubmit} loading={props.loading}>
          <Grid columns={2}>
            <Grid.Column>
              <Form.Field error={errors && errors.title}>
                <label>Movie Title</label>
                <input
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                {errors && errors.title && (
                  <InlineError errorText={errors.title} />
                )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field error={errors && errors.director_id}>
                <label>Director ID</label>
                <input
                  id="director_id"
                  name="director_id"
                  value={form.director_id}
                  onChange={handleChange}
                  placeholder="Director ID"
                />
                {errors && errors.director_id && (
                  <InlineError errorText={errors.director_id} />
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Grid columns={2}>
            <Grid.Column>
              <Form.Field error={errors && errors.photo}>
                <label>Photo URL</label>
                <input
                  id="photo"
                  name="photo"
                  value={form.photo}
                  onChange={handleChange}
                  placeholder="Photo URL"
                />
                {errors && errors.photo && (
                  <InlineError errorText={errors.photo} />
                )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field error={errors && errors.category}>
                <label>Category</label>
                <input
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
                {errors && errors.category && (
                  <InlineError errorText={errors.category} />
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Grid columns={3}>
            <Grid.Column>
              <Form.Field error={errors && errors.country}>
                <label>Country</label>
                <input
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
                {errors && errors.country && (
                  <InlineError errorText={errors.country} />
                )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field error={errors && errors.year}>
                <label>Year</label>
                <input
                  id="year"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="Year"
                />
                {errors && errors.year && (
                  <InlineError errorText={errors.year} />
                )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field error={errors && errors.imdb_score}>
                <label>IMDB Score</label>
                <input
                  id="imdb_score"
                  name="imdb_score"
                  value={form.imdb_score}
                  onChange={handleChange}
                  placeholder="IMDB Score"
                />
                {errors && errors.imdb_score && (
                  <InlineError errorText={errors.imdb_score} />
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Grid columns={1}>
            <Grid.Column>
              <Button type="submit">Submit</Button>
            </Grid.Column>
          </Grid>
          {props.error && (
            <Grid columns={1}>
              <Grid.Column>
                <Message negative>
                  <Message.Header>Error!</Message.Header>
                  <p>{props.error}</p>
                </Message>
              </Grid.Column>
            </Grid>
          )}
        </Form>
      )}
    </div>
  );
}

NewMovieForm.propTypes = {
  loading: PropTypes.bool,
  newMovieSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  status: PropTypes.bool,
};

export default NewMovieForm;
