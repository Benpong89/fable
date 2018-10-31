import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Books } from "../api/books.js";
import Book from "./Book.js";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderBooks() {
    const currUserBooks = this.props.books.filter(
      book => book.owner === this.props.currentUser._id
    );

    return currUserBooks.map(book => <Book key={book._id} book={book} />);
    // return this.props.books.map(book => <Book key={book._id} book={book} />);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const author = ReactDOM.findDOMNode(this.refs.authorInput).value.trim();

    Books.insert({
      title,
      author,
      createdAt: new Date(), // current time
      owner: Meteor.userId(), // _id of logged in user
      username: Meteor.user().username // username of logged in user
    });
    // Clear form
    ReactDOM.findDOMNode(this.refs.titleInput).value = "";
    ReactDOM.findDOMNode(this.refs.authorInput).value = "";
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to Fable</h1>

          <h2>Your personal library</h2>

          <p>
            Create an account to Keep track of books that you own, lend and
            borrow.
          </p>

          <p>Check out the latest popular books below for inspiration.</p>
          {this.props.currentUser ? (
            <div>
              <form className="new-book" onSubmit={this.handleSubmit}>
                <input type="text" ref="titleInput" placeholder="title here" />
                <input
                  type="text"
                  ref="authorInput"
                  placeholder="author here"
                />
                <button className="hidden" type="submit" />
              </form>
              <ul>{this.renderBooks()}</ul>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    books: Books.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Splash);

// If I want to sort my fetch from MongoDB
// books: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
