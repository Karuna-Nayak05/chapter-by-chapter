import React, { useState } from "react";

const GamificationPage = ({ books }) => {
  const [guideOpen, setGuideOpen] = useState(false);

  const points = books.length;

  const badges = [
    { name: "Bookworm", emoji: "🏆", unlocked: points >= 5, description: "Add at least 5 books." },
    { name: "Note-Taker", emoji: "✏️", unlocked: books.filter(b => b.notes && b.notes.trim() !== "").length >= 3, description: "Write notes for at least 3 books." },
    { name: "Star Collector", emoji: "⭐", unlocked: books.filter(b => b.rating >= 4).length >= 3, description: "Give 4+ stars to at least 3 books." },
    { name: "Completed Reader", emoji: "📚", unlocked: books.filter(b => b.status === "Completed").length >= 3, description: "Mark at least 3 books as Completed." },
    { name: "Early Bird", emoji: "🌅", unlocked: books.length >= 1, description: "Add your first book." },
    { name: "Reviewer", emoji: "✍️", unlocked: books.filter(b => b.notes && b.notes.trim() !== "").length >= 5, description: "Write notes for at least 5 books." },
    { name: "High Rating Fan", emoji: "🌟", unlocked: books.filter(b => b.rating === 5).length >= 2, description: "Give 5 stars to at least 2 books." },
    { name: "Consistency", emoji: "📅", unlocked: books.length >= 7, description: "Add at least 7 books in total." },
  ];

  return (
    <div className="gamification-container">
      <h1 className="page-title">🎮 Gamification</h1>
      <p>Track your reading journey and earn points and badges as you complete books!</p>

      {/* Points */}
      <div className="points">Points: {points}</div>

      {/* Badges */}
      <div className="badges-container">
        {badges.map((badge, index) => (
          <div key={index} className={`badge ${badge.unlocked ? "unlocked" : ""}`}>
            <span style={{ fontSize: "24px" }}>{badge.emoji}</span>
            <br />
            {badge.name}
          </div>
        ))}
      </div>

      {/* Badge Guide */}
      <div className="gamification-guide">
        <button className="guide-toggle-btn" onClick={() => setGuideOpen(!guideOpen)}>
          {guideOpen ? "Hide Badge Guide" : "Show Badge Guide"}
        </button>
        <div className={`guide-content ${guideOpen ? "open" : ""}`}>
          <ul>
            {badges.map((badge, index) => (
              <li key={index}><strong>{badge.name}:</strong> {badge.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamificationPage;
