import React, { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

export default () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const changeHandler = e => {
    setTitle(e.target.value);
  };
  const changeHandler2 = e => {
    setAuthor(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={changeHandler}
        required
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={changeHandler2}
        required
      />
      <br />
      <br />
      <input type="submit" value="add book" />
    </form>
  );
};
