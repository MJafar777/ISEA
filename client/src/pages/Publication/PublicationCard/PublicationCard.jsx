import React from "react";
import Date from "../../../components/Date/Date";
import PublicationImage from "../PublicationImage/PublicationImage";
import s from "./publicationcard.module.css";
import { NavLink } from "react-router-dom";

export default function PublicationCard({
  id,
  language,
  title,
  sub_title,
  category,
  image,
}) {
  return (
    <div className={s.container}>
      <PublicationImage image={"http://localhost:8000/img/books/" + image} />
      <div className={s.info}>
        <NavLink to={"/publications/" + id}>
          <h2 className={s.info}>{title}</h2>
        </NavLink>
        <p className={s.inform}>{sub_title}</p>
        <Date lang={language} date={"March 2004"} category={category} />
      </div>
    </div>
  );
}
