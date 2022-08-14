import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gamesAPI from "../../Utilities/user-api";

export default function GameDetailPage() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  useEffect(function () {
    // Load previous orders (paid)
    async function getGame() {
      const game = await gamesAPI.getGame(id);
      setGame(game);
    }
    getGame();
  });
  return (
    <>
      <h1>title: {game.title}</h1>
      <h4>genre: {game.genre}</h4>
      <h4>Platform: {game.platform}</h4>
      <h4>Rating: {game.ESRB_rating}</h4>
      <h4>Price: {game.price}</h4>
    </>
  );
}
