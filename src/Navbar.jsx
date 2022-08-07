import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <img
          src={
            "https://github.com/DouglasVolcato/avengers-api-crud/blob/master/mocks/images/wallpaper.jpg?raw=true"
          }
          style={{ width: "100%", height: "100%" }}
          className="App-logo"
          alt="logo"
        />
        <h1 style={{ textAlign: "center" }}>Avengers API</h1>
        <br />
        <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            style={{
              fontSize: "20px",
              padding: "0.5vw",
              cursor: "pointer",
              backgroundColor: "teal",
              color: "white",
            }}
          >
            Documentation
          </button>
          <button
            style={{
              fontSize: "20px",
              padding: "0.5vw",
              cursor: "pointer",
              backgroundColor: "teal",
              color: "white",
            }}
          >
            Avenger List
          </button>
        </nav>
        <br /> <br />
      </>
    );
  }
}
