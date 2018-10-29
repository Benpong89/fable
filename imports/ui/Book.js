import React from "react";
import { Books } from "../api/books.js";

// Book component - represents a single book
class Book extends React.Component {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  deleteBook() {
    Books.remove(this.props.book._id);
  }

  updateBook() {
    // Books.update(this.props.book._id, {
    //   $set: { checked: !this.props.book.checked }
    // });
  }

  render() {
    return (
      <ul>
        <li>
          Title: {this.props.book.title} Author: {this.props.book.author}
        </li>
        <button className="delete" onClick={this.deleteBook}>
          Remove Book
        </button>
        <button className="update" onClick={this.updateBook}>
          Edit Book
        </button>
      </ul>
    );
  }
}

export default Book;
