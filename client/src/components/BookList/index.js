import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  // console.log("children", {children});
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem(props) {
  console.log(props);
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
           <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.description}</p>      
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.href}
            >
              View book!
            </a>
            
            {props.children}
          
          </Col>
        </Row>
      </Container>
    </li>
  );
}
