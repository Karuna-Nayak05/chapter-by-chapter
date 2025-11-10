import React, { useState } from "react";

const LibraryPage = ({ books, onUpdateBook, onDeleteBook }) => {
  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  // 🟢 NEW — Function to start editing
  const handleEdit = (book) => {
    setEditingBookId(book._id || book.id); // supports both MongoDB _id and local id
    setEditedBook(book);
  };

  const handleSave = () => {
    onUpdateBook(editingBookId, editedBook);
    setEditingBookId(null);
  };

  const handleDelete = (id) => {
    onDeleteBook(id);
  };

  const totalBooks = books.length;
  const completedBooks = books.filter((b) => b.status === "Completed").length;
  const readingBooks = books.filter((b) => b.status === "Reading").length;
  const toReadBooks = books.filter((b) => b.status === "To Read").length;
  const avgRating =
    totalBooks > 0
      ? (
          books.reduce((sum, b) => sum + (Number(b.rating) || 0), 0) / totalBooks
        ).toFixed(1)
      : 0;
  const progress =
    totalBooks > 0 ? Math.round((completedBooks / totalBooks) * 100) : 0;

  return (
    <div className="library-container">
      <h1 className="page-title">📚 My Library</h1>
      <div className="dashboard-panel">
        <div className="stats-panel">
          <div className="stat-card purple">
            <h3>Total Books</h3>
            <p>{totalBooks}</p>
          </div>
          <div className="stat-card purple-light">
            <h3>Completed</h3>
            <p>{completedBooks}</p>
          </div>
          <div className="stat-card purple-dark">
            <h3>Reading</h3>
            <p>{readingBooks}</p>
          </div>
          <div className="stat-card yellow">
            <h3>To Read</h3>
            <p>{toReadBooks}</p>
          </div>
          <div className="stat-card yellow-light">
            <h3>Avg Rating</h3>
            <p>{avgRating}</p>
          </div>
        </div>
        <div className="progress-container">
          <div className="progress-header">
            <span className="progress-label">Progress</span>
            <span className="progress-percent">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-details">
            {completedBooks} of {totalBooks} books completed
          </p>
        </div>
      </div>

      <div className="books-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book-card" key={book._id || book.id}>
              {editingBookId === (book._id || book.id) ? (
                <>
                  <input
                    type="text"
                    value={editedBook.title}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editedBook.author}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, author: e.target.value })
                    }
                  />
                  <select
                    value={editedBook.status}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, status: e.target.value })
                    }
                  >
                    <option>To Read</option>
                    <option>Reading</option>
                    <option>Completed</option>
                  </select>
                  <textarea
                    value={editedBook.notes}
                    onChange={(e) =>
                      setEditedBook({ ...editedBook, notes: e.target.value })
                    }
                  />
                  <div className="book-rating">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`star ${
                          n <= editedBook.rating ? "selected" : ""
                        }`}
                        onClick={() =>
                          setEditedBook({ ...editedBook, rating: n })
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="book-actions">
                    <button className="edit-btn" onClick={handleSave}>
                      Save
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => setEditingBookId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <span className="status-badge">{book.status}</span>
                  {book.notes && <p className="book-notes">{book.notes}</p>}
                  <div className="book-rating">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`star ${
                          n <= book.rating ? "selected" : ""
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="book-actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(book)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(book._id || book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="no-books">No books added yet!</p>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
