import React from "react";

// Book component - represents a single book
class Book extends React.Component {
  render() {
    return (
      <ul>
        <li>
          Title: {this.props.book.title} Author: {this.props.book.author}
        </li>
      </ul>
    );
  }
}

export default Book;
