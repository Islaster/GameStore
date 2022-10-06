import { useState } from "react";
import * as gamesAPI from "../../Utilities/user-api";
import { useEffect } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GameList(props) {
  const [games, setGames] = useState(null);
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
        <tr>
          <th width="100">Title</th>
          <th width="100">Genre</th>
          <th width="100">Platform</th>
          <th width="50">delete</th>
        </tr>
      </thead>
      <tbody>
        {games.map((g, idx) => (
          <tr>
            <Link to={`/games/${g._id}`}>
              <GameCard game={g} key={idx} user={props.user} />
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
