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
      <h1>{game.title}</h1>
      <h4>{game.genre}</h4>
      <h4>{game.platform}</h4>
      <h4>{game.ESRB_rating}</h4>
      <h4>{game.price}</h4>
    </>
  );
}
