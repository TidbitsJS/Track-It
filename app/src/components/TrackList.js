import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Track = (props) => {
  const { _id, username, description, duration, date } = props.track;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + _id} style={{ color: "green" }}>
          Edit
        </Link>{" "}
        |{" "}
        <a
          href="/"
          style={{ color: "red" }}
          onClick={() => {
            props.deleteTrack(_id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ tracks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTrack = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      tracks: this.state.tracks.filter((el) => el._id !== id),
    });
  };

  trackList = () => {
    return this.state.tracks.map((track) => {
      return (
        <Track track={track} deleteTrack={this.deleteTrack} key={track._id} />
      );
    });
  };

  render() {
    return (
      <div>
        <h3> Tracks</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.trackList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TrackList;
