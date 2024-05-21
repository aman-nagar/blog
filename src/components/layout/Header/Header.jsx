// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { auth } from "../../../firebaseConfig";

export default function Header({ user }) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Error signing out:", error.message);
    }
  };

  return (
    <header>
      <Link to="/">Blogger</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="user">
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
