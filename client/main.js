import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "../imports/ui/App.js";
import "../imports/startup/accounts-config.js";
import "./main.html";

Meteor.startup(() => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
