import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../configs/config";
import s from "./login.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handlerLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = await axios.post(url + "/users/login", {
      email,
      password,
    });
    response.data.status === "succes"
      ? navigate("/")
      : alert("Bunday user akkaunti tiplmadi,Iltimos qayta urinib kurin");
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
