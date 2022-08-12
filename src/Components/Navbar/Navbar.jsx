import { NavLink } from "react-router-dom";
import AdminNav from "../../Utilities/AdminNav";
import UserNav from "../../Utilities/UserNav";
import * as userService from "../../Utilities/user-service";

export default function Navbar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  console.log(props);
  return (
    <div className="top-bar">
      <NavLink to="/">Game Ranch</NavLink>{" "}
      <NavLink to="/games">Game List</NavLink>{" "}
      {props.user ? (
        <>
          {props.user.role.role === "admin" ? (
            <>
              {" "}
              <AdminNav /> <NavLink to="/admin">Admin</NavLink>
            </>
          ) : (
            <>
              <UserNav /> <NavLink to="/guest">User</NavLink>
            </>
          )}{" "}
          <NavLink to="" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </>
      ) : (
        <div className="top-bar-right">
          <NavLink to="/create/new">SignUp/Login</NavLink>
        </div>
      )}
    </div>
  );
}
