import { useState } from "react";
import * as gameService from "../../Utilities/user-api";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function GameForm() {
  const navigate = useNavigate();
  const [games, setGames] = useState({
    title: "",
    genre: "",
    ESRB_rating: "",
    platform: "",
    star_rating: "",
  });

  function handleChange(evt) {
    setGames({ ...games, [evt.target.name]: evt.target.value });
  }
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      await gameService.create(games);
      navigate("/games");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          value={games.title}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Genre</Form.Label>
        <Form.Control
          name="genre"
          type="text"
          value={games.genre}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>ESRB Rating</Form.Label>
        <Form.Control
          name="ESRB_rating"
          type="text"
          value={games.ESRB_rating}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Platform</Form.Label>
        <Form.Control
          name="platform"
          type="text"
          value={games.platform}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={games.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" variant="success">
        Add Game
      </Button>
    </Form>
  );
}
