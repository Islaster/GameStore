import { useState } from "react/cjs/react.development";
import * as gamesAPI from "../../Utilities/user-api";
import { useEffect } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GameList(props) {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  useEffect(function () {
    async function getGames() {
      const games = await gamesAPI.getGames();
      setGames(games);
    }
    getGames();
  }, []);

  return (
    <table>
      <thead>
        <th>Title</th>
        <th>Genre</th>
        <th>Platform</th>
      </thead>
      <tbody>
        {games.map((g, idx) => (
          <Link to={`/games/${g._id}`}>
            <GameCard game={g} key={idx} user={props.user} />
          </Link>
        ))}
      </tbody>
    </table>
  );
}
