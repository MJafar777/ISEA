import React, { useState, useRef } from "react";
import s from "./register.module.css";
import { useNavigate } from "react-router-dom";
import facebook from "../../img/SignUp/facebook.svg";
import google from "../../img/SignUp/google.svg";
import instagram from "../../img/SignUp/instagram.svg";
import { useSelector, useDispatch } from "react-redux";
import { signupSlice, verifySlice } from "../../store/authSlice";
import { useEffect } from "react";

export default function Register() {
  const emailRef = useRef();
  const verifyRef = useRef();
  const dispatch = useDispatch();
  const isVerify = useSelector((store) => store.auth.isVerify);
  const isSend = useSelector((store) => store.auth.isSend);
  const navigate = useNavigate();

  const enterEmail = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    dispatch(signupSlice({ email }));
    console.log(isSend);
  };

  const verifyHandler = async (e) => {
    e.preventDefault();
    const verifyCode = verifyRef.current.value;
    dispatch(verifySlice({ verifyCode }));
    console.log(isVerify);
  };
  useEffect(() => {
    if (isVerify) navigate("/signup");
  }, [isVerify]);
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
          <button className={s.btns} onClick={enterEmail}>
            sign up
          </button>

          {isSend && (
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
            <div className={s.rememberCheck}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className={s.forgot}>Forgot Password?</p>
          </div>
        </form>
      </div>
      <div className={s.rightRegister}>
        <h1 className={s.rightTitle}>Hello , Friend</h1>
        <div className={s.bottom2}></div>
        <p>fill up personal information and start journey with us.</p>
        <button className={s.btn2}>Sign Up</button>
      </div>
    </div>
  );
}
