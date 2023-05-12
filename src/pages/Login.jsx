import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/auth/useAuth";

import { Input } from "../components/form/Input";
import { Button } from "../components/shared/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const usernameRegex = new RegExp("^[a-zA-Z].[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$");
  const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*d)(?=.*[^ws]).{8,}$");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard/recipes", { replace: true });
    }
  }, []);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const { user, login } = useAuth();

  const handleSubmit = () => {
    if (!username) {
      setUsernameMessage("Field is required.");
    } else if (!usernameRegex.test(username)) {
      setUsernameMessage(
        "Invalid format. Format should be: first letter of name, @, last name of employee."
      );
      setPassword("");
      passwordRef.current.focus();
    } else {
      setUsernameMessage("");
      setIsValidUsername(true);
    }

    if (!password) {
      setPasswordMessage("Field is required.");
    } else if (!passwordRegex.test(password)) {
      setPasswordMessage(
        "Invalid format. Password should be at least 8 characters long with at least one uppercase letter, number, and special character."
      );
      setPassword("");
      passwordRef.current.focus();
    } else {
      setPasswordMessage("");
      setIsValidPassword(true);
    }

    if (isValidUsername && isValidPassword) {
      login({
        username: username,
        password: password,
      });
    }
  };
  return (
    <div className="login">
      <div className="login__wrapper">
        <img
          className="login__logo"
          src="../../src/assets/images/bakery_logo.png"
          alt="bakery_logo"
        />
        <h1 className="login__title">Dream Bakery</h1>
        <form
          className="login__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            classes="input"
            label="Username:"
            id="username"
            value={username}
            setValue={setUsername}
            ref={usernameRef}
            isValidInput={isValidUsername}
            validationMessage={usernameMessage}
          />
          <Input
            classes="input"
            label="Password:"
            id="password"
            value={password}
            setValue={setPassword}
            ref={passwordRef}
            isValidInput={isValidPassword}
            validationMessage={passwordMessage}
          />
          <Button
            classes="button button__login"
            label="Login"
            action={() => handleSubmit()}
          />
        </form>{" "}
      </div>
    </div>
  );
};
