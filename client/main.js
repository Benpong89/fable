import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/App.js";
import "./main.html";

Meteor.startup(() => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
