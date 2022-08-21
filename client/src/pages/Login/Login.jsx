import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../store/authSlice";
import { url } from "../../configs/config";
import s from "./login.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(loginSlice({ email, password }));
  };

  //mamur7191.J@
  return (
    <div className={s.container}>
      <form className={s.content}>
        <label className={s.label}>Email</label>
        <input
          className={s.input}
          ref={emailRef}
          type="email"
          required
          placeholder="email"
        />
        <label className={s.label}>Password</label>
        <input
          className={s.input}
          ref={passwordRef}
          type="password"
          required
          placeholder="password"
        />
        <div className={s.btn}>
          <button onClick={handlerLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
