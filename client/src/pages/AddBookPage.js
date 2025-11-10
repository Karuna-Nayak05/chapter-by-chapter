import React, { useState } from "react";

const AddBookPage = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    rating: 0,
    status: "To Read",
    notes: "",
  });

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author) return;
    onAddBook(newBook);
    setNewBook({ title: "", author: "", rating: 0, status: "To Read", notes: "" });
  };


  return (
    <div className="add-book-form">
      <h1 className="page-title">📖 Add New Book</h1>
      <table>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>
              <input
                type="text"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Author:</td>
            <td>
              <input
                type="text"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <select
                value={newBook.status}
                onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
              >
                <option>To Read</option>
                <option>Reading</option>
                <option>Completed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Notes:</td>
            <td>
              <textarea
                value={newBook.notes}
                onChange={(e) => setNewBook({ ...newBook, notes: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`star ${n <= newBook.rating ? "selected" : ""}`}
                    onClick={() => setNewBook({ ...newBook, rating: n })}
                  >
                    ★
                  </span>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBookPage;
