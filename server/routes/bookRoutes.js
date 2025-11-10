import express from "express";
import Book from "../models/book.js";
import { verifyGoogleAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * ✅ Get all books for the logged-in user
 */
router.get("/", verifyGoogleAuth, async (req, res) => {
  try {
    const books = await Book.find({ userId: req.userId }); // filter by user
    res.json(books);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * ✅ Add new book - linked to specific Google user
 */
router.post("/", verifyGoogleAuth, async (req, res) => {
  try {
    const { title, author, status, notes, rating } = req.body;

    const newBook = await Book.create({
      title,
      author,
      status,
      notes,
      rating,
      userId: req.userId, // ✅ user-based assignment
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Add error:", error);
    res.status(400).json({ message: "Failed to add book" });
  }
});

/**
 * ✅ Update book (only if user owns it)
 */
router.put("/:id", verifyGoogleAuth, async (req, res) => {
  try {
    const updated = await Book.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // ✅ secure ownership check
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(403).json({ message: "Not authorized to update this book" });

    res.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ message: "Failed to update book" });
  }
});

/**
 * ✅ Delete book (only if user owns it)
 */
router.delete("/:id", verifyGoogleAuth, async (req, res) => {
  try {
    const deleted = await Book.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId, // ✅ secure ownership check
    });

    if (!deleted)
      return res.status(403).json({ message: "Not authorized to delete this book" });

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
