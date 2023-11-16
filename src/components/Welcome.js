import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";
import sakura from "../img/sakura.png";
import Footer from "./Footer";

function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <main className="welcome">
      <h2 className="welcome__title">
        Welcome to this
        <br />
        Japanese Language Exchange Chat
      </h2>

      <a
        href="https://www.flaticon.com/free-icons/flower"
        title=" Flower icons created by Vitaly Gorbachev - Flaticon"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img src={sakura} alt="ReactJs logo" width={70} height={70} />
      </a>
      <p>Sign in with Google to chat with your fellow 日本語 learners</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignIn}
          alt="sign in using Google"
          type="button"
          className="sign-btn"
        />
      </button>
      <Footer />
    </main>
  );
}

export default Welcome;
