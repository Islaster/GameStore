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
  async function handleDelete(evt) {
    evt.preventDefault();
    await gamesAPI.deleteGame();
    navigate("/games");
  }

  return (
    <>
      {games.map((g, idx) => (
        <Link to={`/games/${g._id}`}>
          <GameCard game={g} key={idx} />
          {props.user ? (
            <>
              {" "}
              {props.user.role.role ? (
                <button
                  className="button alert float-right"
                  onClick={handleDelete}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </Link>
      ))}
    </>
  );
}
