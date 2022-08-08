import React, { Component } from "react";

export default class AvengerList extends Component {
  async componentDidMount() {
    const url = "https://douglasvolcato-avengers-api.herokuapp.com";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ avengers: data, loading: false });
  }

  state = {
    loading: true,
    avengers: false,
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            this.state.avengers.map((n) => this.showAvengers(n))
          )}
        </div>
      </>
    );
  }

  showAvengers(n) {
    return (
      <div
        style={{
          width: "20vw",
          margin: "1vw",
          padding: "0.4vw",
          fontSize: "1.5vw",
          border: "solid 0.2vw gray",
        }}
      >
        <img
          src={n.image}
          alt={n.character}
          style={{ width: "20vw", height: "30vw" }}
        />
        <p style={{ textAlign: "center", fontSize: "2vw", fontWeight: "bold" }}>
          #{n.id} {n.character}
        </p>
        <p>Real name: {n.realName}</p>
        <p>Joined in: {n.joinedIn}</p>
        <p>Notes: {n.notes}</p>
      </div>
    );
  }
}
