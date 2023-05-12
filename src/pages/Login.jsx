import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/auth/useAuth";

import { Input } from "../components/form/Input";
import { Button } from "../components/shared/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

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
    login({
      username: username,
      password: password,
    });
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
      <Button label="Login" action={() => handleSubmit()} />
    </form>
  );
};
