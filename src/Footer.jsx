import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          backgroundColor: "#484848",
          Color: "white",
          padding: "1vw",
          width: 'fit',
          fontSize: '1.5vw',
        }}
      >
        <div style={{ margin: "auto" }}>
          This is not an official API from Marvel
        </div>
        <div style={{ margin: "auto", display: "flex" }}>
          <div style={{ margin: "auto", marginRight: "1vw" }}>
            Made by Douglas Volcato
          </div>
          <a
            href="https://github.com/DouglasVolcato"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "4vw", margin: "auto" }}
              src="https://douglasvolcato.github.io/portfolio-DouglasVolcato/assets/images/Logo-Github.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    );
  }
}
