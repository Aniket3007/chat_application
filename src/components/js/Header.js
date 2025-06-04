import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../themeContext";
import "../css/Header.css";

function Header({ username, onNewSession }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="header-navbar">
      <div className="header-brand">
        <span className="logo-circle">🤖</span>
        <span className="brand-text">AI-DN</span>
      </div>
      <div className="header-actions">

        <div className="user-menu-container" ref={dropdownRef}>
          <span className="greeting d-none d-md-inline" onClick={() => setDropdownOpen(!isDropdownOpen)} style={{ cursor: 'pointer' }}>
            Hello, {username} <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item new-session-btn-dropdown" onClick={() => { onNewSession(); setDropdownOpen(false); }}>
                + New Session
              </button>
              {/* Theme toggle can also be moved here if desired, or stay separate */}
            </div>
          )}
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-label="Toggle dark/light mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
