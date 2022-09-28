import s from "./newsCard.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../img/News/8bc65e77e5fd2efe9db62986205fb142f2e73bd2.jpg";

const NewsCard = () => {
  return (
    <>
      <div className={s.card}>
        <div className={s.left}>
          <img src={image} alt="this is news image" />
        </div>
        <div className={s.right}>
          <NavLink to="/">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro fugit est tempora atque, ex fugiat.
            Nam officia ab nesciunt temporibus nisi eius est corrupti veniam exercitationem, facilis eum enim!
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
