import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBookPage from "./pages/AddBookPage";
import LibraryPage from "./pages/LibraryPage";
import GamificationPage from "./pages/GamificationPage";
import Login from "./components/Login";
import MotivationBubble from "./components/MotivationBubble";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // ✅ FIXED import
import { getBooks, addBook, updateBook, deleteBook } from "./api/booksApi";

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  // ✅ Handle Google Login
  const handleGoogleLogin = async (googleToken) => {
    localStorage.setItem("googleToken", googleToken);

    // ✅ decode token correctly
    const decoded = jwtDecode(googleToken);

    const userObject = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      sub: decoded.sub,
    };

    setUser(userObject);
    await fetchBooks();
  };

  // ✅ Fetch books
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Check existing login on app load
  useEffect(() => {
    const token = localStorage.getItem("googleToken");

    if (token) {
      const decoded = jwtDecode(token);
      const userObject = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
        sub: decoded.sub,
      };

      setUser(userObject);
      fetchBooks();
    } else {
      setLoading(false);
    }
  }, []);

  // ✅ Add book
  const handleAddBook = async (book) => {
    try {
      setLoading(true);
      await addBook(book);
      await fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // ✅ Update book
  const handleUpdateBook = async (id, data) => {
    try {
      setLoading(true);
      await updateBook(id, data);
      await fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // ✅ Delete book
  const handleDeleteBook = async (id) => {
    try {
      setLoading(true);
      await deleteBook(id);
      await fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("googleToken");
    setUser(null);
    setBooks([]);
  };

  // ✅ Show login page if no user
  if (!user) {
    return <Login onLogin={handleGoogleLogin} />;
  }

  // ✅ Logged-in UI
  return (
    <Router>
      <Navbar onLogout={handleLogout} user={user} />

      <MotivationBubble />

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading your library...</p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<AddBookPage onAddBook={handleAddBook} />} />

          <Route
            path="/library"
            element={
              <LibraryPage
                books={books}
                onUpdateBook={handleUpdateBook}
                onDeleteBook={handleDeleteBook}
              />
            }
          />

          <Route path="/gamification" element={<GamificationPage books={books} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
