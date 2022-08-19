import axios from "axios";
import React, { useState, useRef } from "react";
import { url } from "../../configs/config";
import s from "./login.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handlerLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = axios.post(url + "/users/login", { email, password });
  };
  return (
    <div className={s.container}>
      <form className={s.content}>
        <input ref={emailRef} type="email" required placeholder="email" />
        <input
          ref={passwordRef}
          type="password"
          required
          placeholder="password"
        />
        <button onClick={handlerLogin}>Login</button>
      </form>
    </div>
  );
}
