import { useState } from "react";
import * as usersService from "../../Utilities/user-api";

export default function EditForm({ user, setUser }) {
  const [aUser, setAuser] = useState({
    firstName: user.firstName,
    LastName: user.LastName,
    username: user.username,
    role: { role: user.role.role },
    email: user.email,
  });

  function handleChange(evt) {
    setAuser({ ...aUser, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)0
      const user = await usersService.edit(aUser);
      console.log(user);
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        name="firstName"
        type="text"
        value={aUser.firstName}
        onChange={handleChange}
      />
      <label>Last Name:</label>
      <input
        name="LastName"
        type="text"
        value={aUser.LastName}
        onChange={handleChange}
      />
      <label>Username:</label>
      <input
        name="username"
        type="text"
        value={aUser.username}
        onChange={handleChange}
      />
      <p>Email: </p>
      <input
        name="username"
        type="text"
        value={aUser.email}
        onChange={handleChange}
      />
      <p>role:</p>
      <input
        name="role"
        type="text"
        value={aUser.role.role}
        onChange={handleChange}
      />
      <button type="submit">Edit</button>
    </form>
  );
}
