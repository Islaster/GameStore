import { NavLink } from "react-router-dom";
import AdminNav from "../../Utilities/AdminNav";
import UserNav from "../../Utilities/UserNav";
import * as userService from "../../Utilities/user-service";

export default function Navbar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <>
      <NavLink to="/">Home Page</NavLink>{" "}
      <NavLink to="/games">Game List</NavLink>
      {props.user ? (
        <>
          {props.user.role.role === "admin" ? <AdminNav /> : <UserNav />}{" "}
          <NavLink to="" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </>
      ) : (
        <NavLink to="/create/new">SignUp</NavLink>
      )}
    </>
  );
}
