import React from "react";
import Navbar from "./Navbar.js";
import App from "./App.js";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <App />
      </div>
    );
  }
}

export default Root;
