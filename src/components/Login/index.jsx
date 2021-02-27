import React, { useState } from "react";
import Logo from "../Logo";
import "./style.css";
import { auth } from "../../firebase.js";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="login">
      <Logo color="black" />
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signIn">
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className="login__register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
