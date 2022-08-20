import React from "react";
import { useRef } from "react";
import s from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const surnameRef = useRef();
  const middlenameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const genderRef = useRef();
  const dispatch = useDispatch();
  // {
  //   name,
  //   surname,
  //   name_of_father,
  //   gender,
  //   email_or_phone,
  //   password,
  //   passwordConfrim,
  // }
  const registerHandler = (e) => {
    const username = usernameRef.current.value;
    const surname = surnameRef.current.value;
    const name_of_father = middlenameRef.current.value;
    const gender = genderRef.current.value;
    const email_or_phone = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    e.preventDefault();
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
  if (isAuth) navigate("/");
  return (
    <>
      <div className={s.form}>
        <div className={s.formBody}>
          <div className={s.username}>
            <label className={s.form__label} htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              ref={usernameRef}
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className={s.lastname}>
            <label className={s.form__label} htmlFor="lastName">
              Last Name{" "}
            </label>
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
            <label className={s.form__label} htmlFor="middleName">
              Middle Name{" "}
            </label>
            <input
              ref={middlenameRef}
              type="text"
              name=""
              id="middleName"
              className={s.form__input}
              placeholder="midlleName"
            />
          </div>
          <div className={s.email}>
            <label className={s.form__label} htmlFor="email">
              Email{" "}
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className={s.form__input}
              placeholder="Email"
            />
          </div>
          <div className={s.password}>
            <label className={s.form__label} htmlFor="password">
              Password{" "}
            </label>
            <input
              ref={passwordRef}
              className={s.form__input}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className={s.confirmPassword}>
            <label className={s.form__label} htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
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
