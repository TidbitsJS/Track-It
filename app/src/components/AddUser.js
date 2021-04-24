import React, { Component } from "react";
import axios from "axios";

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add new User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Add User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
