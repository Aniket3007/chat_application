import React, { useState } from "react";
import "../css/MessageInput.css";

function MessageInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="message-input-bar">
      <input
        className="message-input"
        type="text"
        placeholder="Type your message…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="send-btn"
        onClick={handleSend}
        disabled={!input.trim()}
        aria-label="Send"
      >
        <span className="send-icon">➤</span>
      </button>
      <select className="version-select" defaultValue="4.1">
        <option value="4.1">4.1</option>
        <option value="4.2">4.2</option>
        <option value="4.3">4.3</option>
      </select>
    </div>
  );
}

export default MessageInput;
