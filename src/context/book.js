import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const editBookById = async (id, newBookTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newBookTitle,
    });

    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });

    setBooks(updatedBookList);
  };
  const deleteBookById = async (id) => {
    const resp = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedArr = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedArr);
  };
  const valueToShare = {
    books,
    deleteBookById,
    createBook,
    fetchBooks,
    editBookById,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
