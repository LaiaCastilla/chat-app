import React from "react";

function SendMessage() {
  return (
    <form className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
