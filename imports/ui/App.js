import React from "react";
import Splash from "./Splash.js";
import Show from "./Show.js";
import { withTracker } from "meteor/react-meteor-data";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.currentUser ? <Show /> : <Splash />}</div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
