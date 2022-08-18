import React from "react";
import s from "./Benefits.module.css";
import a from "../Renewables.module.css";
import Title from "../../Title/Title";

import img1 from "../../../img/Renewables/IMG_20220306_114700.jpg";
import img2 from "../../../img/Renewables/photo_2022-04-12_16-52-56.jpg";
import img3 from "../../../img/Renewables/photo_2022-04-22_17-13-06.jpg";
import img4 from "../../../img/Renewables/thmb.jpg";

const Benefits = () => {
  return (
    <div className="container">
      <Title name={"Benefits"} />
      <div className={s.cardInfo}>
        <div className={s.info}>
          <img src={img1} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Мы завершили проект дома, который работает на гибридной солнечной
              фотоэлектрической станции. Мощность станции составляет 16 кВт, что
              обеспечивает полное электроснабжение дома в течение дня. Станция
              оснащена гибридным инвертором, функция которого заключается в
              выработке энергии за счет солнечных батарей, а при отсутствии
              солнца, подача энергии за счет аккумуляторов или городской...
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
        <div className={s.info}>
          <img src={img2} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Мы завершили проект дома, который работает на гибридной солнечной
              фотоэлектрической станции. Мощность станции составляет 16 кВт, что
              обеспечивает полное электроснабжение дома в течение дня. Станция
              оснащена гибридным инвертором, функция которого заключается в
              выработке энергии за счет солнечных батарей, а при отсутствии
              солнца, подача энергии за счет аккумуляторов или городской...
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
        <div className={s.info}>
          <img src={img3} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Мы завершили проект дома, который работает на гибридной солнечной
              фотоэлектрической станции. Мощность станции составляет 16 кВт, что
              обеспечивает полное электроснабжение дома в течение дня. Станция
              оснащена гибридным инвертором, функция которого заключается в
              выработке энергии за счет солнечных батарей, а при отсутствии
              солнца, подача энергии за счет аккумуляторов или городской...
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
        <div className={s.info}>
          <img src={img4} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Установлены 2 частотных преобразователя мощностью 160 кВт для
              насосной станции, расположенной на Сырдарьинской ТЭС. В результате
              установки экономится от 10 до 30% электроэнергии в час.
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
        <div className={s.info}>
          <img src={img1} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Завершена установка солнечной фотоэлектрической станции с
              мощностью на 40 кВт, установленная на навес для парковки на
              территории завода «Навоийский горно-металлургический комбинат».
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
        <div className={s.info}>
          <img src={img2} alt="img1" />
          <div className={a.content}>
            <h3>place for information</h3>
            <p>
              Мы завершили проект дома, который работает на гибридной солнечной
              фотоэлектрической станции. Мощность станции составляет 16 кВт, что
              обеспечивает полное электроснабжение дома в течение дня. Станция
              оснащена гибридным инвертором, функция которого заключается в
              выработке энергии за счет солнечных батарей, а при отсутствии
              солнца, подача энергии за счет аккумуляторов или городской...
            </p>
            <button className={s.btn}>Read more...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
