import React, { Component } from "react";

export default class Documentation extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div style={{ padding: "1vw 10vw 1vw 10vw", textAlign: "left" }}>
            <div>
              <div></div>
              <div>
                <section>
                  <h2>Usage</h2>
                  <p>Returns the hole list of the Avengers:</p>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "rgb(0, 82, 148)",
                      padding: "1vw",
                      margin: "1vw",
                      fontWeight: "700",
                      border: "solid 0.4vw rgb(0, 67, 19)",
                    }}
                  >
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      https://douglasvolcato-avengers-api.herokuapp.com/
                    </p>
                  </div>
                  <p>Returns a specific avenger by id:</p>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "rgb(0, 82, 148)",
                      padding: "1vw",
                      margin: "1vw",
                      fontWeight: "700",
                      border: "solid 0.4vw rgb(0, 67, 19)",
                    }}
                  >
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      https://douglasvolcato-avengers-api.herokuapp.com/get/(id)
                    </p>
                  </div>
                  <p>Example of response:</p>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "rgb(0, 82, 148)",
                      padding: "1vw",
                      margin: "1vw",
                      fontWeight: "700",
                      border: "solid 0.4vw rgb(0, 67, 19)",
                    }}
                  >
                    <p style={{ margin: "auto", maxWidth: "98%" }}>"id": 1,</p>
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      "character": "Iron Man",
                    </p>
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      "realName": "Anthony Edward Stark",
                    </p>
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      "joinedIn": "Avengers #1 (September 01, 1963)",
                    </p>
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      "image":
                      "https://github.com/DouglasVolcato/avengers-api/blob/master/mocks/images/1.png?raw=true",
                    </p>
                    <p style={{ margin: "auto", maxWidth: "98%" }}>
                      "Co-Founder of the main Avengers team. Former member of
                      the New Avengers, Pym's Mighty Avengers, and the
                      Fifty-States Initiative Mighty Avengers. An alternate
                      adolescent version of the original replaced him for a time
                      until they merged. Current member of the main Avengers
                      team."
                    </p>
                  </div>
                </section>
              </div>
              <div></div>
            </div>
          </div>

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
              <a href="https://github.com/DouglasVolcato" target="_blank">
                <img
                  style={{ width: "50px", margin: "auto" }}
                  src="https://douglasvolcato.github.io/portfolio-DouglasVolcato/assets/images/Logo-Github.png"
                  alt=""
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
