import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

import { Input } from "./Input";
import { Button } from "../shared/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const loginUser = (e) => {
    alert("login");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        label="Username:"
        id="username"
        value={username}
        setValue={setUsername}
        ref={usernameRef}
        isValidInput={isValidUsername}
      />
      <Input
        label="Password:"
        id="password"
        value={password}
        setValue={setPassword}
        ref={passwordRef}
        isValidInput={isValidPassword}
      />
      <Button label="Login" action={() => loginUser()} />
    </form>
  );
};

Login.propTypes = {};
