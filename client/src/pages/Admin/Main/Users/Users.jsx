import React, { useEffect, useState } from "react";
import s from "./users.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image from "../../../../img/SignUp/75.jpg";
import User from "./User/User";
import { usersGet } from "../../../../store/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(usersGet());
  }, [users]);

  const userss = useSelector((store) => {
    return store.users.users.data;
  });

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>USERS</h2>
        <div className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      {userss &&
        userss.map((val, key) => {
          return (
            <User
              username={val.name + " " + val.surname}
              role={val.role}
              gender={val.gender}
              image={image}
              key={key}
              email={val.email}
              id={val._id}
              photo={val.photo}
            />
          );
        })}
    </div>
  );
}
