import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./admin.module.css";
import Books from "./Main/Books/Books";
import Users from "./Main/Users/Users";
import Projects from "./Main/Projects/Projects";
import News from "./Main/News/News";
import Sidebar from "./Sidebar/Sidebar";
import { updateImage } from "../../store/usersSlice";
import MyProjects from "./Main/MyProjects/MyProjects";
import AdvancedSettings from "./Main/AdvancedSettings/AdvancedSettings";
import { checkMe } from "../../store/authSlice";

export default function Admin() {
  const navigate = useLocation();
  const dispatch = useDispatch();

  const [image, setImage] = React.useState("");
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateImage({ file: image }));
    dispatch(checkMe());
  };

  return (
    <div className={s.container}>
      <Sidebar />
      <div className={s.main}>
        {navigate.hash === "#books" ? (
          <Books />
        ) : navigate.hash === "#users" ? (
          <Users />
        ) : navigate.hash === "#news" ? (
          <News />
        ) : navigate.hash === "#projects" ? (
          <Projects />
        ) : navigate.hash === "#myproject" ? (
          <MyProjects />
        ) : (
          <>
            <AdvancedSettings />
            <form>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button onClick={updateHandler}>update</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
