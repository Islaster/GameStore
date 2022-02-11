import { useState } from "react/cjs/react.development";
import * as gamesAPI from "../../Utilities/user-api";
import { useEffect } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import { Link } from "react-router-dom";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(function () {
    // Load previous orders (paid)
    async function getGames() {
      const games = await gamesAPI.getGames();
      setGames(games);
    }
    getGames();
  }, []);
  return (
    <>
      {games.map((g) => (
        <Link to={`/games/${g._id}`}>
          <GameCard game={g} />
        </Link>
      ))}
    </>
  );
}
