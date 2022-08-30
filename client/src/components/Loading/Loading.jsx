import React from "react";
import ReactLoading from "react-loading";
import s from "./loading.module.css";

export default function Loading({ type, classname, color, heigth, width }) {
  return (
    <ReactLoading
      color={color}
      className={classname}
      type={type}
      height={heigth}
      width={width}
    />
  );
}
