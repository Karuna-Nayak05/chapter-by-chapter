import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">

      {/* LEFT: App title */}
      <div className="navbar-left">
        <h1 className="app-title">📖 Chapter by Chapter</h1>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="navbar-center">
        <Link to="/">Add Book</Link>
        <Link to="/library">My Library</Link>
        <Link to="/gamification">Gamification</Link>
      </div>

      {/* RIGHT: User avatar, name, logout */}
      <div className="navbar-right">
        {user && (
          <>
            <img
              src={
                user.picture ||
                "https://i.imgur.com/0y8Ftya.png" // ✅ fallback magical avatar
              }
              alt="User Avatar"
              className="nav-user-avatar"
            />
            <span className="nav-user-name">{user.name || "Reader"}</span>

            <button className="nav-logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
