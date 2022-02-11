import { NavLink } from "react-router-dom";

export default function AdminNav() {
  return (
    <>
      <NavLink to="/admin"></NavLink>{" "}
      <NavLink to="/games/new">Add a Game</NavLink>{" "}
      <NavLink to="/store/info">Edit Store Details</NavLink>
    </>
  );
}
