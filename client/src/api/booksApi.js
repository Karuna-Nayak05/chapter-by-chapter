const API_URL = "http://localhost:5000/api/books";

function authHeaders() {
  const token = localStorage.getItem("googleToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // ✅ send Google token
  };
}

// 🟢 Get all books
export async function getBooks() {
  const res = await fetch(API_URL, {
    headers: authHeaders(),
  });
  return res.json();
}

// 🟢 Add book
export async function addBook(book) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(book),
  });
  return res.json();
}

// 🟢 Update book
export async function updateBook(id, updatedBook) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(updatedBook),
  });
  return res.json();
}

// 🔴 Delete book
export async function deleteBook(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  return res.json();
}
