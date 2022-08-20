import React from "react";
import Title from "../../Title/Title";
import a from "./shablon2.module.css";
import imgTitle from "../../../img/factory/9.jpg";
const Shablon2 = (img, title, subtitle) => {
  const cont = "container" + " " + a.titleSection;
  return (
    <div className={a.shablon2}>
      <h1 className={a.title}>Title</h1>
      <div className={cont}>
        <div className={a.leftSection}>
          <div className={a.content}>
            <h2 className={a.typeContent}>NITROGEN GENERATORS LL0</h2>
            <p className={a.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              architecto dolor inventore illo animi incidunt fugit. Minima sint,
              blanditiis repellat impedit dicta tempore, aliquam nam vel tempora
              voluptas a similique! Lorem ipsum
            </p>
            <img className={a.imgTitle} src={imgTitle} alt="imgTitle" />
          </div>
        </div>
        <div className={a.rightSection}>
          <h2 className={a.contentRight}>Desingning</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            dignissimos a temporibus aperiam aliquid iusto pariatur repellat
            alias rem rerum libero totam doloribus tempora dicta nihil numquam,
          </p>
          <ul className={a.ulTable}>
            <li>aliquid iusto pariatur repellat consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <p>
            facilis, sunt fugiat? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quisquam dignissimos a temporibus aperiam aliquid
            iusto pariatur repellat alias rem rerum libero totam doloribus
            tempora dicta nihil numquam, facilis, sunt fugiat?
          </p>
          <ul className={a.ulTable}>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shablon2;
