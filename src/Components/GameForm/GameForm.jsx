import { useState } from "react";
import * as gameService from "../../Utilities/user-api";
import { useNavigate } from "react-router-dom";

export default function GameForm() {
  const navigate = useNavigate();
  const [games, setGames] = useState({
    title: "",
    genre: "",
    ESRB_rating: "",
    platform: "",
    price: "",
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
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        name="title"
        type="text"
        value={games.title}
        onChange={handleChange}
        required
      />
      <label>genre</label>
      <input
        name="genre"
        type="text"
        value={games.genre}
        onChange={handleChange}
        required
      />
      <label>ESRB Rating</label>
      <input
        name="ESRB_rating"
        type="text"
        value={games.ESRB_rating}
        onChange={handleChange}
        required
      />
      <label>platform</label>
      <input
        name="platform"
        type="text"
        value={games.platform}
        onChange={handleChange}
        required
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={games.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Game</button>
    </form>
  );
}
