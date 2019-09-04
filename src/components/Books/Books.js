import React from "react";
import BookContextProvider from "../../contexts/BookContext";
import Navbar from "./Navbar";
import BookList from "./BookList";
import BookForm from "./BookForm";
import { Link } from "react-router-dom";

export default () => {
  return (
    <BookContextProvider>
      <Link to="/">Home</Link>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
};
