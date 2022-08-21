import React from "react";
import s from "./profile.module.css";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

export default function Profile({ name, image }) {
  const user = useSelector((store) => store.auth.user);
  return (
    <div className={s.content}>
      <img
        className={s.image}
        src={"http://localhost:8000/img/users/" + user.photo}
      />
      <Link to={"/me"}>
        <h3>
          {user.name} {user.surname}
        </h3>
      </Link>
    </div>
  );
}
