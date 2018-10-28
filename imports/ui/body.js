import { Template } from "meteor/templating";
import { Session } from "meteor/session";
import { Books } from "../api/books.js";
import "./body.html";

Template.bookList.helpers({
  books() {
    return Books.find({});
  }
});
