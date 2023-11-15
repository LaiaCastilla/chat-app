import React from "react";

function Message() {
  return (
    <div className={"chat-bubble"}>
      <img className="chat-bubble__left" src="" alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Laia Castilla</p>
        <p className="user-message">
          I built a real time chat app with React and Firebase
        </p>
      </div>
    </div>
  );
}

export default Message;
