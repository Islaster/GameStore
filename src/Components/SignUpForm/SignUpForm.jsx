import { Component } from "react/cjs/react.production.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Add this import
import { signUp } from "../../Utilities/user-service";
export default class SignUpForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  // The object passed to setState is merged with the current state object
  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      console.log(formData);
      this.props.setUser(user);
      console.log(this.props.user);
      this.props.navigate("/");
    } catch (err) {
      // An error occurred
      console.log(err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <Form.Text>
            Hint: use special chars. and capital chars to increase password
            strength
          </Form.Text>
        </Form.Group>
        <Form.Label>Confirm</Form.Label>
        <Form.Control
          placeholder="Confirm Password"
          type="password"
          name="confirm"
          value={this.state.confirm}
          onChange={this.handleChange}
          required
        />
        <Button type="submit" className="button success" disabled={disable}>
          SIGN UP
        </Button>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Form>
    );
  }
}
