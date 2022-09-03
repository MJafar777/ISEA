import React from "react";
import Title from "../../Title/Title";
import s from "./InnovationTechnology.module.css";

import img1 from "../../../img/Renewables/inovation-technology/img1.jpg";
import img2 from "../../../img/Renewables/inovation-technology/img2.jpg";

const InnovationTechnology = () => {
  return (
    <div className="container">
      <Title name={"Innovation Technology"} />
      <div className={s.innovationTechnology}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Innovations in renewable energy encompass all new approaches that
              help to overcome barriers and result in an accelerated deployment
              of renewables to support the energy transition. Innovative
              solutions to decarbonise the global energy sector require
              combining various policy instruments across the whole technology
              lifecycle, from R&D to market scale-up, as well as the development
              of new smart technologies, information technology, new types of
              financial and market instruments, business models and the
              engagement of new actors across the energy systems.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              A first-of-a-kind mapping and analysis of innovations that will
              transform the power sector, provided by ISEA, shows that by making
              use of innovative solutions that allow to integrate a higher share
              of renewables into power systems, innovation holds the key to a
              cost-effective global energy transformation. The report,
              “Innovation Landscape for a Renewable-Powered Future: solutions to
              integrate variable renewables” contains the most in-depth
              assessment of the power sector transformation to date. It shows
              how synergies between different innovative solutions in business
              models, market design
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationTechnology;
