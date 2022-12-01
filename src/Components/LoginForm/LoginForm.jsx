import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersService from "../../Utilities/user-service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)0
      const user = await usersService.login(credentials);
      setUser(user);
      console.log(user);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/guest");
      }
    } catch (err) {
      console.log(err);
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">LOG IN</Button>
      <p className="error-message">&nbsp;{error}</p>
    </Form>
  );
}
