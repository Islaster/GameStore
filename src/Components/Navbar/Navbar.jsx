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
      <NavLink to="/games">Game List</NavLink> <AdminNav />
      <UserNav />
      &nbsp;&nbsp;
      <NavLink to="" onClick={handleLogOut}>
        Log Out
      </NavLink>
      <NavLink to="/create/new">SignUp</NavLink>)
    </>
  );
}
