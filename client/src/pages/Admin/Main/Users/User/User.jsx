import React from "react";
import s from "../users.module.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { usersDelete } from "../../../../../store/usersSlice";

export default function User({ image, username, gender, email, role, id }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(usersDelete({ id }));
  };

  return (
    <div className={s.user}>
      <div className={s.info}>
        <div>
          <img src={image} className={s.image} />
        </div>
        <div className={s.about}>
          <h3 className={s.name}>{username}</h3>
          <h3>Gender: {gender}</h3>
          <p>{email}</p>
        </div>
      </div>
      <div className={s.status}>
        <h2>{role}</h2>
      </div>
      <div className={s.editing}>
        <div onClick={deleteHandler} className={s.delete}>
          <AiFillDelete className={s.deleteIcon} />
        </div>
        <div className={s.edit}>
          <BsFillPencilFill className={s.editIcon} />
        </div>
      </div>
    </div>
  );
}
