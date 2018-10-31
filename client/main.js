import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "../imports/startup/accounts-config.js";
import "./main.html";
import Root from "../imports/ui/Root.js";

Meteor.startup(() => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
