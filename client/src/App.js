import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: "",
    savedBooks: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log('results', res.data.items[0].volumeInfo);
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ?(
                <h1 className="text-center"> No Books to Display</h1>
              ) : (
              <BookList>
                {this.state.books.map((book, index, books) => (
                  <BookListItem
                  key={books[index]}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors[0]}
                  description={book.volumeInfo.description}
                  href={book.volumeInfo.infoLink}
                  thumbnail = {book.volumeInfo.imageLinks.smallThumbnail}
                  />
              ))
              }
              </BookList>
               )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
