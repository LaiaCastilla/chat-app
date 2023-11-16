import React from "react";
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function NavBar() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1 className="nav-bar__title">Nihongo exchange chat </h1>
      {user ? (
        <button className="sign-out" onClick={signOut} type="button">
          Sign out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignIn}
            alt="Sign in with Google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
}

export default NavBar;
