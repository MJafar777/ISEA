import React from "react";
import s from "./users.module.css";
import image from "../../../../img/SignUp/75.jpg";
import User from "./User/User";

export default function Users() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>USERS</h2>
        <div className={s.plus}>+</div>
      </div>
      <User
        image={image}
        role={"USER"}
        username={"Niyozbek"}
        gender={"MALE"}
        email={"niyozbekpulatov@gmail.com"}
      />
      <User
        image={image}
        role={"USER"}
        username={"Niyozbek"}
        gender={"MALE"}
        email={"niyozbekpulatov@gmail.com"}
      />
      <User
        image={image}
        role={"USER"}
        username={"Niyozbek"}
        gender={"MALE"}
        email={"niyozbekpulatov@gmail.com"}
      />
      <User
        image={image}
        role={"USER"}
        username={"Niyozbek"}
        gender={"MALE"}
        email={"niyozbekpulatov@gmail.com"}
      />
      <User
        image={image}
        role={"USER"}
        username={"Niyozbek"}
        gender={"MALE"}
        email={"niyozbekpulatov@gmail.com"}
      />
    </div>
  );
}
