import { Component } from "react/cjs/react.production.min";
import * as usersService from "../../Utilities/user-api";
import { Row } from "react-foundation/lib/components/grid";
export default class EditForm extends Component {
  state = {
    firstName: this.props.user.firstName,
    LastName: this.props.user.LastName,
    username: this.props.user.username,
    role: { role: this.props.user.role },
    email: this.props.user.email,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)0
      const User = await usersService.edit(formData);
      this.props.setUser(User);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Row>
        <form onSubmit={this.handleSubmit} data-abide noValidate>
          <label>First Name:</label>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            name="LastName"
            type="text"
            value={this.state.LastName}
            onChange={this.handleChange}
          />
          <label>Username:</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Email: </label>
          <input
            name="username"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>role:</label>
          <input
            name="role"
            type="text"
            value={this.state.role.role}
            onChange={this.handleChange}
          />
          <button type="submit" className="success button">
            Edit
          </button>
        </form>
      </Row>
    );
  }
}
