import React from "react";
import styled from "styled-components";
import BooksItem from "./BooksItem";
import { Book } from "../../models/book.model";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  return (
    <BooksListStyle>
      {books.map((book) => (
        <BooksItem key={book.id} book={book} />
      ))}
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export default BooksList;
