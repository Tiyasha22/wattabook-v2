import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/book";
const BookShow = ({ book }) => {
  const { deleteBookById, editBookById } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;

  return (
    <div className="book-show">
      <img
        alt="book-images"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div>
        {!showEdit ? content : <BookEdit book={book} onSubmit={handleSubmit} />}
      </div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          close
        </button>
      </div>
    </div>
  );
};

export default BookShow;
