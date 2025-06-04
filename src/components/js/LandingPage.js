import React from 'react';
import '../css/LandingPage.css';

function LandingPage({ showWelcomeMessage }) {
  return (
    <div className="landing-page-container">
      <div className="landing-content">
        <div className="landing-logo">🚀</div> {/* Placeholder Logo */}
        <h1 className="landing-brand">Aidn</h1>
        {showWelcomeMessage && <p className="landing-welcome-docs">Welcome to TM documentation</p>}
        <p className="landing-welcome">Ask me anything to get started!</p>
        {/* MessageInput will be conditionally rendered here via App.js */}
      </div>
    </div>
  );
}

export default LandingPage;
