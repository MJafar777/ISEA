import React from "react";
import { NavLink } from "react-router-dom";

export default function Button({ link = "/", id = "" }) {
  return (
    <div className="button">
      <NavLink  to={link} className="btn">
        read more...
      </NavLink>
    </div>
  );
}
