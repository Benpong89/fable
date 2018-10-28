import { Meteor } from "meteor/meteor";
import { Books } from "../imports/api/books.js";

Meteor.startup(() => {
  if (Books.find().count() === 0) {
    [
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "1984", author: "George Orwell" },
      { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
      { title: "The Catcher in the Rye", author: "J. D. Salinger" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
    ].forEach(function(book) {
      Books.insert(book);
    });
  }
});
