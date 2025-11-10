import React, { useEffect, useState } from "react";

const messages = [
  "You're doing amazing! 🌟",
  "One page at a time! 📖",
  "Reading is magic ✨",
  "Every page makes you stronger 💛",
  "Books are your superpower! 🚀",
  "I'm proud of you! 🌱",
  "You inspire me! 📚",
  "Keep going, smart reader! 🤩",
  "Look at you being awesome! 🎉",
  "Reading is an adventure! 🗺️",
];

export default function MotivationBubble() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    updateMessage();
    const interval = setInterval(updateMessage, 8000);

    return () => clearInterval(interval);
  }, []);

  const updateMessage = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(newMessage);
  };

  return (
    <div className="motivation-bubble-container">
      <div className="motivation-bubble">
        {message}
      </div>
    </div>
  );
}
