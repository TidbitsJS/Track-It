import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navbar from "./components/Navbar";
import TrackList from "./components/TrackList";
import EditTrack from "./components/EditTrack";
import CreateTrack from "./components/CreateTrack";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={TrackList} />
        <Route path="/edit/:id" component={EditTrack} />
        <Route path="/create" component={CreateTrack} />
        <Route path="/user" component={AddUser} />
      </div>
    </Router>
  );
}

export default App;
