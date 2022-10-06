import React, { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function AuthPage({ setUser }) {
  const [key, setKey] = useState("signup");
  const navigate = useNavigate();
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="signup" title="Sign-up">
        <SignUpForm />
      </Tab>
      <Tab eventKey="login" title="Login">
        <LoginForm />
      </Tab>
    </Tabs>
  );
}
