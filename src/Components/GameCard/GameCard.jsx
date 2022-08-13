import * as gamesAPI from "../../Utilities/user-api";
import { useNavigate } from "react-router-dom";

export default function GameCard(props) {
  const navigate = useNavigate();
  async function handleDelete(evt) {
    evt.preventDefault();
    await gamesAPI.deleteGame();
    navigate("/games");
  }
  return (
    <>
      <td>{props.game.title}</td>
      <td>{props.game.genre}</td>
      <td>{props.game.platform}</td>

      {props.user ? (
        <>
          {" "}
          {props.user.role ? (
            <td>
              <button
                className="button small alert float-right"
                onClick={handleDelete}
              >
                x
              </button>
            </td>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
