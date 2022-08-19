import React from "react";
import s from "./signup.module.css";

export default function Signup() {
  return (
    <>
      <div className={s.form}>
        <div className={s.formBody}>
          <div className={s.username}>
            <label className={s.form__label} for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className={s.lastname}>
            <label className={s.form__label} for="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className={s.form__input}
              placeholder="LastName"
            />
          </div>
          <div className={s.lastname}>
            <label className={s.form__label} for="middleName">
              Middle Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="middleName"
              className={s.form__input}
              placeholder="midlleName"
            />
          </div>
          <div className={s.email}>
            <label className={s.form__label} for="email">
              Email{" "}
            </label>
            <input
              type="gender"
              id="email"
              className={s.form__input}
              placeholder="Email"
            />
          </div>
          <div className={s.password}>
            <label className={s.form__label} for="password">
              Password{" "}
            </label>
            <input
              className={s.form__input}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className={s.confirmPassword}>
            <label className={s.form__label} for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className={s.form__input}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className={s.footer}>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
