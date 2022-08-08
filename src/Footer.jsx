import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          backgroundColor: "#000000",
          Color: "white",
          padding: "15px",
          width: "98%",
        }}
      >
        <div style={{ margin: "auto" }}>
          This is not an official API from Marvel
        </div>
        <div style={{ margin: "auto", display: "flex" }}>
          <div style={{ margin: "auto", marginRight: "5px" }}>
            Made by Douglas Volcato
          </div>
          <a
            href="https://github.com/DouglasVolcato"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "50px", margin: "auto" }}
              src="https://douglasvolcato.github.io/portfolio-DouglasVolcato/assets/images/Logo-Github.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    );
  }
}
