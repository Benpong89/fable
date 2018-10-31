import React from "react";
import AccountsUIWrapper from "./AccountsUIWrapper.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-container">
        <button>Home</button>
        <AccountsUIWrapper className="session-form" />
      </nav>
    );
  }
}

export default Navbar;
