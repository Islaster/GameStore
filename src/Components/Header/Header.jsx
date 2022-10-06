import { NavLink } from "react-router-dom";
import AdminNav from "../../Utilities/AdminNav";
import UserNav from "../../Utilities/UserNav";
import * as userService from "../../Utilities/user-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Game Ranch</Navbar.Brand>
        <Nav>
          <Nav.Link href="/games">Game List</Nav.Link>
          {props.user ? (
            <>
              {props.user.role === "admin" ? (
                <>
                  {" "}
                  <AdminNav /> <Nav.Link to="/admin">Admin</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/guest">User</Nav.Link>
                </>
              )}{" "}
              <Nav.Link href="/" onClick={handleLogOut}>
                Log Out
              </Nav.Link>
            </>
          ) : (
            <div className="top-bar-right">
              <Nav.Link href="/create/new">SignUp/Login</Nav.Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
