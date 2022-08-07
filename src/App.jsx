import React, { Component } from "react";
import Documentation from "./Documentation";
import AvengerList from "./AvengerList";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Documentation /> */}
        <AvengerList />
      </>
    );
  }
}
