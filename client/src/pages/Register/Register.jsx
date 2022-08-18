import React, { useState, useRef } from "react";
import s from "./register.module.css";
import { url } from "../../configs/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import facebook from "../../img/SignUp/facebook.svg";
import google from "../../img/SignUp/google.svg";
import instagram from "../../img/SignUp/instagram.svg";

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
      <div className={s.leftRegister}>
        <h3>
          Company <span>ISEA</span>
        </h3>
        <h1>Sign In to Account</h1>
        <div className={s.bottom}></div>
        <div className={s.links}>
          <img src={facebook} alt="facebook" />
          <img src={google} alt="google" />
          <img src={instagram} alt="instagram" />
        </div>
        <p className={s.useEmail}>or use your email account</p>
        <form className={s.content}>
          <input
            className={s.inputOne}
            ref={emailRef}
            type="email"
            required
            placeholder="Email"
          />
          <button className={s.btns} onClick={s.enterEmail}>
            sign up
          </button>

          {status && (
            <>
              <input
                ref={verifyRef}
                type="text"
                required
                placeholder="verify"
                className={s.inputOne}
              />
              <button className={s.btns} type="submit" onClick={verifyHandler}>
                verify
              </button>
            </>
          )}
          <div className={s.remember}>
            <input type="checkbox" />
            <p>Remember me</p>
            <p className={s.forgot}>Forgot Password?</p>
          </div>
        </form>
      </div>
      <div className={s.rightRegister}>
        <h1>Hello , Friend</h1>
        <div className={s.bottom}></div>
        <p>fill up personal information and start journey with us.</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
