import React from "react";
import s from "./profile.module.css";
import { useSelector } from "react-redux";

export default function Profile({ name, image }) {
  const user = useSelector((store) => store.auth.user);
  return (
    <div className={s.content}>
      <img
        className={s.image}
        src={"http://localhost:8000/img/users/" + user.photo}
      />
      <h3>
        {user.name} {user.surname}
      </h3>
    </div>
  );
}
