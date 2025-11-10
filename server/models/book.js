import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, default: "To Read" },
    rating: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    userId: { type: String, required: true }  // ✅ user-specific
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);


