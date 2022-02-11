import { useState } from "react";

export default function UserInfo({ user }) {
  const [aUser, setAuser] = useState({
    firstName: "",
    lastName: "",
    username: user.username,
  });

  function handleChange(evt) {
    setAuser({ ...aUser, [evt.target.name]: evt.target.value });
  }
  return (
    <>
      <h1>Welcome,{user.firstName ? user.firstName : "User"}</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.LastName}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>role: {user.role.role}</p>
    </>
  );
}
