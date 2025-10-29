import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(searchTerm) {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
      const data = await response.json();

      // Map through the results
      const formattedBooks = data.docs.slice(0, 15).map((book) => ({
        title: book.title,
        author: book.author_name
          ? book.author_name.join(", ")
          : "Unknown Author",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
      }));

      setBooks(formattedBooks);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>📖 Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <BookList books={books} />
    </div>
  );
}
