import React, { useEffect, useState } from "react";
import s from "./users.module.css";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../../img/SignUp/75.jpg";
import User from "./User/User";
import { usersGet } from "../../../../store/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   dispatch(usersGet());
  // });

  // useSelector((store) => setUsers(store.users.users));

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>USERS</h2>
        <div className={s.plus}>+</div>
      </div>
      {/* {users.map((val) => {
        return <li>1111</li>;
      })} */}
    </div>
  );
}
