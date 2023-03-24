import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
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
  const deleteBookById = async(id) => {
    const resp= await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedArr = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedArr);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
