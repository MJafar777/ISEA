import React, { useState } from "react";

import s from "./publicationPage.module.css";

import Title from "../../components/Title/Title";
import { NavLink } from "react-router-dom";

const PublicationPage = () => {
  const menu_types = [
    { id: 1, name: "All Genres" },
    { id: 2, name: "Science" },
    { id: 3, name: "Fiction" },
    { id: 4, name: "Business" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Philosophy" },
  ];
  const menuType = `${s.menu_type}`;
  const menuTypeBottom = `${s.menu_type_bottom}`;
  const [isIndex, setIsIndex] = useState(1);

  return (
    <div className="container">
      <div className={s.category}>
        <div className={s.title}>
          <Title name="Recent Publications" />
        </div>
        <div className={s.category_type}>
          {menu_types.map((val, index) => (
            <NavLink
              to=""
              onClick={() => setIsIndex(index + 1)}
              className={isIndex === val.id ? menuTypeBottom : menuType}
            >
              {val.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
