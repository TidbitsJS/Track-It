import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {
    navCollapse: true,
  };

  handleNavCollapse = () => {
    this.setState({
      navCollapse: !this.state.navCollapse,
    });
  };

  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link to="/" className="navbar-brand">
          Track-IT
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded={!this.state.navCollapse ? true : false}
          aria-label="Toggle navigation"
          onClick={this.handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            this.state.navCollapse ? "collapse" : ""
          } navbar-collapse`}
          id="myNavbar"
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <ul
            className="navbar-nav mx-auto"
            style={{ width: "100%", display: "contents" }}
          >
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Tracks
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Peer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
