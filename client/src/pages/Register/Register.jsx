import React, { useState, useRef } from "react";
import s from "./register.module.css";
import { url } from "../../configs/config";
import axios from "axios";

export default function Register() {
  const emailRef = useRef();
  const [status, setStatus] = useState(false);

  const enterEmail = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const response = await axios.post(url + "/users/signup", { email });
    console.log(response);
    setStatus(response.data.status === "Success" ? true : false);
  };
  console.log(status);

  return (
    <div className={s.container}>
      (
      <form className={s.content}>
        <input ref={emailRef} type="email" required placeholder="email" />
        <button onClick={enterEmail}>sign up</button>
      </form>
      )
      {status && (
        <form>
          <input type="text" required placeholder="verify" />
          <button>verify</button>
        </form>
      )}
    </div>
  );
}
