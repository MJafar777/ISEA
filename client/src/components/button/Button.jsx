import React from "react";
import { NavLink } from "react-router-dom";

export default function Button({ link = "/" }) {
  return (
    <div className="button">
      <NavLink to={link} className="btn2">
        read more...
      </NavLink>
    </div>
  );
}
