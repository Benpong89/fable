import React from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Books } from "../api/books.js";
import Book from "./Book.js";

class App extends React.Component {
  renderBooks() {
    return this.props.books.map((book, idx) => <Book key={idx} book={book} />);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const author = ReactDOM.findDOMNode(this.refs.authorInput).value.trim();

    Books.insert({
      title,
      author,
      createdAt: new Date() // current time
    });
    // Clear form
    ReactDOM.findDOMNode(this.refs.titleInput).value = "";
    ReactDOM.findDOMNode(this.refs.authorInput).value = "";
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Book List</h1>

          <form className="new-book" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="titleInput" placeholder="title here" />
            <input type="text" ref="authorInput" placeholder="author here" />
            <button type="submit" />
          </form>
        </header>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    books: Books.find({}).fetch()
  };
})(App);

// getBooks() {
//   return [
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" },
//     { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
//     { title: "The Catcher in the Rye", author: "J. D. Salinger" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
//   ];
// }

// renderBooks() {
//   this.getBooks().map((book, idx) => {
//     return (
//       <ul key={idx}>
//         <li>{book.title} </li>);
//         <li>{book.author} </li>);
//       </ul>
//     );
//   });
// }
//
// render() {
//   return (
//     <div className="container">
//       <header>
//         <h1>Here are your Books!</h1>
//       </header>
//
//       <ul>{this.renderBooks()}</ul>
//     </div>
//   );
// }
// }
