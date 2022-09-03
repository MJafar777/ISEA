import React from "react";
import { useRef } from "react";
import s from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkMe, registerSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const surnameRef = useRef();
  const middlenameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const genderRef = useRef();
  const photoRef = useRef();
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const surname = surnameRef.current.value;
    const name_of_father = middlenameRef.current.value;
    const gender = genderRef.current.value;
    const email_or_phone = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    dispatch(
      registerSlice({
        username,
        surname,
        name_of_father,
        gender,
        email_or_phone,
        password,
        passwordConfirm,
      })
    );
  };

  const isAuth = useSelector((store) => store.auth.isAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(checkMe());
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <div className={s.form}>
        <div className={s.formBody}>
          <div className={s.username}>
            <input
              ref={usernameRef}
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className={s.lastname}>
            <input
              ref={surnameRef}
              type="text"
              name=""
              id="lastName"
              className={s.form__input}
              placeholder="LastName"
            />
          </div>
          <div className={s.lastname}>
            <input
              ref={middlenameRef}
              type="text"
              id="middleName"
              className={s.form__input}
              placeholder="midlleName"
            />
          </div>
          <select ref={genderRef}>
            <option value="">Jinsingizni tanlang</option>
            <option value="male">Ayol</option>
            <option value="female">Erkak</option>
          </select>

          <div className={s.password}>
            <input
              ref={passwordRef}
              className={s.form__input}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input ref={emailRef} type="email" placeholder="email" />
          </div>

          <div className={s.confirmPassword}>
            <input
              ref={passwordConfirmRef}
              className={s.form__input}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className={s.footer}>
          <button className={s.btn} onClick={registerHandler}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* */
}
