import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Books } from "../api/books.js";
import Book from "./Book.js";

class App extends React.Component {
  renderBooks() {
    return this.props.books.map((book, idx) => <Book key={idx} book={book} />);
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Book List</h1>
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
