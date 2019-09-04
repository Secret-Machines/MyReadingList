import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

export default () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <b>You have {books.length} books left on the list</b>
    </div>
  );
};
