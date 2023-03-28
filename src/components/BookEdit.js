import React, { useState, useContext } from "react";
import BooksContext from "../context/book";
const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useContext(BooksContext);
  const [newTitle, setNewTitle] = useState(book.title);
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, newTitle);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={newTitle} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
