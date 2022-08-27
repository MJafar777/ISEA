import React, { useRef } from "react";
import s from "./addUser.module.css";

function AddUser() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const middlenameRef = useRef();
  const photoRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const roleRef = useRef();
  const genderRef = useRef();

  return (
    <div className={s.popup}>
      <form className={s.form}>
        <input ref={nameRef} type="text" placeholder="name" required />
        <input ref={surnameRef} type="text" placeholder="surname" required />
        <input
          ref={middlenameRef}
          type="text"
          placeholder="middlename"
          required
        />
        <input ref={photoRef} type="file" placeholder="photo" required />
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <input
          ref={passwordConfirmRef}
          type="password"
          placeholder="confirm password"
        />
        <select ref={roleRef}>
          <option value="user">user</option>
          <option value="user">engineer</option>
          <option value="user">sponsor</option>
          <option value="user">admin</option>
        </select>
        <select ref={genderRef}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button>add users</button>
      </form>
    </div>
  );
}

export default AddUser;
