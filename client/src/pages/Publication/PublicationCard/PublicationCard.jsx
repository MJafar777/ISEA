import React from "react";
import Date from "../../../components/Date/Date";
import PublicationImage from "../PublicationImage/PublicationImage";
import s from "./publicationcard.module.css";
import image from "../../../img/Publications/1.jpg";

export default function PublicationCard() {
  return (
    <div className={s.container}>
      <PublicationImage image={image} />
      <div className={s.info}>
        <h2 className={s.info}>Title</h2>
        <p className={s.inform}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          repellendus, sapiente quo inventore error voluptatem, dolorem, id eos
          impedit consequuntur nisi provident veniam blanditiis dolore quam?
          Pariatur sapiente non rerum?
        </p>
        <Date lang={"english"} date={"March 2004"} category={"Benefits"} />
      </div>
    </div>
  );
}
