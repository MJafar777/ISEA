import React, { useState, useRef } from "react";
import s from "./register.module.css";
import { url } from "../../configs/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef();
  const verifyRef = useRef();
  const [status, setStatus] = useState(true);
  const [statusVerify, setStatusVerify] = useState(false);
  const navigate = useNavigate();
  const enterEmail = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const response = await axios.post(url + "/users/signup", { email });
    console.log(response);
    setStatus(response.data.status === "Succes" ? true : false);
  };

  const verifyHandler = async (e) => {
    e.preventDefault();
    const verifyCode = verifyRef.current.value;
    const response = await axios.post(url + "/users/verify", {
      code: 240314,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmRlYjkyMGEwYWI0YzA5OGI4ZGFhMSIsImlhdCI6MTY2MDgwODA4MiwiZXhwIjoxNjYxNDA4MDgyfQ.8HBjf1in6IjOT6Ss1yRilf7-PTLcsC8Kq9XGZrpGAco",
    });
    response.data.status === "success"
      ? navigate("/signup")
      : alert("Siz hatto narsa kiritingiz");
  };

  return (
    <div className={s.container}>
      <form className={s.content}>
        <input ref={emailRef} type="email" required placeholder="email" />
        <button onClick={enterEmail}>sign up</button>

        {status && (
          <>
            <input ref={verifyRef} type="text" required placeholder="verify" />
            <button type="submit" onClick={verifyHandler}>
              verify
            </button>
          </>
        )}
      </form>
    </div>
  );
}
