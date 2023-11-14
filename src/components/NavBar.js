import React, { useState } from "react";
import GoogleSignIn from "../img/btn_google_signin_dark_pressed_web.png";

function NavBar() {
  const [user, setUser] = useState(false);

  const googleSignIn = () => {
    setUser(true);
  };

  const signOut = () => {
    setUser(false);
  };

  return (
    <nav className="nav-bar">
      <h1 className="nav-bar__title">React chat</h1>
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
