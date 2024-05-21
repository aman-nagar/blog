//src/cpmponents/layout/Header.jsx
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
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
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
