import { NavLink } from "react-router-dom";

export default function UserNav() {
  return (
    <>
      <NavLink to="/user">Account</NavLink>
      <NavLink to="/wishlist">Wish List</NavLink>
    </>
  );
}
