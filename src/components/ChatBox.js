import React from "react";
import Message from "./Message";

function ChatBox() {
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message/>
      </div>
      {/* to finish whenever it's time */}
    </main>
  );
}

export default ChatBox;
