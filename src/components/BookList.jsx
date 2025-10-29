import React from "react";
import Bookcard from "./Bookcard";

export default function BookList({ books }) {
  if (books.length === 0) {
    return <p> Try Searching </p>;
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Bookcard
          key={index}
          title={book.title}
          author={book.author}
          cover={book.cover}
        />
      ))}
      <Bookcard />
      <Bookcard />
      <Bookcard />
    </div>
  );
}
