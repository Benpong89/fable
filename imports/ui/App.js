import React from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Books } from "../api/books.js";
import Book from "./Book.js";
import AccountsUIWrapper from "./AccountsUIWrapper.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
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

          <AccountsUIWrapper />

          <form className="new-book" onSubmit={this.handleSubmit}>
            <input type="text" ref="titleInput" placeholder="title here" />
            <input type="text" ref="authorInput" placeholder="author here" />
            <button className="hidden" type="submit" />
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

// If I want to sort my fetch from MongoDB
// tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
