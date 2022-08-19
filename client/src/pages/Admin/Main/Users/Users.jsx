import React from "react";
import s from "./users.module.css";
import image from "../../../../img/SignUp/75.jpg";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export default function Users() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>USERS</h2>
      </div>
      <div className={s.user}>
        <div className={s.info}>
          <div>
            <img src={image} className={s.image} />
          </div>
          <div>
            <h3 className={s.name}>Niyozbek Pulatov Zokir o'g'li</h3>
            <h3>Gender: MAlE</h3>
            <p>niyozbekpulatov@gmail.com</p>
          </div>
        </div>
        <div className={s.status}>
          <p>status:</p>
          <h2>USER</h2>
        </div>
        <div className={s.editing}>
          <div className={s.delete}>
            <AiFillDelete className={s.deleteIcon} />
          </div>
          <div className={s.edit}>
            <BsFillPencilFill className={s.editIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
