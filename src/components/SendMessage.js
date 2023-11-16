import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  const SendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <form onSubmit={(event) => SendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        value={message}
        className="form-input__input"
        placeholder="Type your message..."
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" title="Okutte" className="send-btn"></button>
    </form>
  );
}

export default SendMessage;
