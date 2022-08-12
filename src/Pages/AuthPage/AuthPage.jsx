import React, { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <main>
      <h1>{showSignUp ? "SignUp" : "Login"}</h1>
      <div className="switch">
        <input
          className="switch-input"
          id="mySwitch"
          type="checkbox"
          onClick={() => setShowSignUp(!showSignUp)}
        />

        <label className="switch-paddle" htmlFor="mySwitch">
          <span className="show-for-sr">{showSignUp ? "Login" : "SignUp"}</span>
        </label>
      </div>
      {showSignUp ? (
        <SignUpForm setUser={setUser} navigate={navigate} />
      ) : (
        <LoginForm setUser={setUser} navigate={navigate} />
      )}
    </main>
  );
}
