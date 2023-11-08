import React from "react";
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";

function Welcome() {
  const googleSignIn = () => {};
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignIn}
          alt="sign in using Google"
          type="button"
        />
      </button>
    </main>
  );
}

export default Welcome;
