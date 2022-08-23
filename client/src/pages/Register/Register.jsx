import React, { useRef } from "react";
import s from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupSlice } from "../../store/authSlice";
import { useEffect } from "react";

export default function Register() {
  const emailRef = useRef();
  const dispatch = useDispatch();
  const isSend = useSelector((store) => store.auth.isSend);
  const navigate = useNavigate();

  const enterEmail = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    dispatch(signupSlice({ email }));
  };

  useEffect(() => {
    if (isSend) navigate("/signup");
  }, [isSend]);
  return (
    <div className={s.container}>
      <div className={s.leftRegister}>
        <form className={s.content}>
          <h1 className={s.title}>
            Sign In to Account
            <h3 className={s.subtitle}>
              Company <span>ISEA</span>
            </h3>
          </h1>

          <input
            className={s.input}
            ref={emailRef}
            type="email"
            required
            placeholder="Email"
          />
          <div className={s.btn}>
            <button className="btn" onClick={enterEmail}>
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
