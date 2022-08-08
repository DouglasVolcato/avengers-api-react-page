import React, { Component } from "react";
import Documentation from "./Documentation";
import AvengerList from "./AvengerList";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class App extends Component {
  state = {
    documentation: false,
    avengerList: true,
  };
  render() {
    return (
      <>
        <Navbar changePage={this.changePage} />
        {this.showDocumentation()}
        {this.showAvengerList()}
        <Footer />
      </>
    );
  }
  changePage = (num) => {
    if (num === 1) {
      this.setState({ documentation: true, avengerList: false });
    } else if (num === 2) {
      this.setState({ documentation: false, avengerList: true });
    }
  }
  showAvengerList = () => {
    if (this.state.avengerList === true) {
      return <AvengerList />;
    }
  }
  showDocumentation = () => {
    if (this.state.documentation === true) {
      return <Documentation />;
    }
  }
}
