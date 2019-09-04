import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Books/Navbar";
import BookList from "./components/Books/BookList";
import BookForm from "./components/Books/BookForm";

export default () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
};

/*
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books/Books";

export default () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
      </Switch>
    </div>
    </Router>
  );
};
*/
