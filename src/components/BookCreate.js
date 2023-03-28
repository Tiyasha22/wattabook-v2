import React, { useState, useContext } from "react";
import BooksContext from "../context/book";
const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Book Title:</label>
        <input value={title} onChange={handleChange} className="input" />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
