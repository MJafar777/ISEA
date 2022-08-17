import React, { useState } from "react";
import s from "./register.module.css";
import { url } from "../../configs/config";

export default function Register() {
  const [status, setStatus] = useState("");
  const enterEmail = async (e) => {
    e.preventDefault();
    const response = await fetch(url + "/users/signup");
    const data = response.json();
    setStatus(data.status);
  };
  return (
    <div>
      {status === "Success" ? (
        <form>
          <input type="email" required name="email" placeholder="email" />
          <button onClick={enterEmail}>sign up</button>
        </form>
      ) : (
        <form>
          <input type="email" required name="email" placeholder="email" />
          <button onClick={enterEmail}>sign up</button>
        </form>
      )}
    </div>
  );
}
