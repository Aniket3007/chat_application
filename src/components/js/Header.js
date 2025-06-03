import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import "../css/Header.css";

function Header({ username }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="header-navbar">
      <div className="header-brand">
        <span className="logo-circle">🤖</span>
        <span className="brand-text">AI-DN</span>
      </div>
      <div className="header-actions">

        <button className="new-session-btn" title="Start new session">
          <span style={{fontWeight:600}}>+ New Session</span>
        </button>
        <span className="greeting d-none d-md-inline">
          Hello, {username}
        </span>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
