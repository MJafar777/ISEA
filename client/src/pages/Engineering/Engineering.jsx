import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import img from "../../img/enginier/backEnergy.jpg";
import img2 from "../../img/enginier/img.jpg";
import img3 from "../../img/enginier/shamolEnergy.jpg";

import a from "./engineering.module.css";
import Title from "../../components/Title/Title";

import img11 from "../../img/hero-Slider/3.jpg";
import img22 from "../../img/hero-Slider/4.jpg";
import img33 from "../../img/hero-Slider/5.jpg";
import img44 from "../../img/hero-Slider/6.jpg";

const Engineering = () => {
  const Component = a.engineeringTitle + " " + "container";
  const Component2 = a.DESIGNING + " " + "container";

  return (
    <>
      <div>
        <div className={a.background}>
          <div className={Component}>
            <h1 className={a.titleH1}>THE ENGINEERING organisation</h1>
            <p className={a.paragrof}>
              INNOVATIVE SOLUTIONS FOR HUMAN AND ENVIRONMENTAL APPLICATION
            </p>
            <div className={a.link2}>
              <NavLink className={a.linkAboutMenu} to={"/about"}>
                more about the organisation
              </NavLink>
              <AiOutlineArrowRight className={a.right} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title name={"Engineering"} />
      </div>
      <div className={a.count}>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/company-info"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </NavLink>
      </div>
      <Title name={"SERVICES"} />
      <div className={a.designing}>
        <div className={Component2}>
          <div className="one">
            <div className={a.src}>
              <div className={a.left}>
                <h2>DESIGNING</h2>
                <p>
                  WE OFFER DESIGN REALIZATION AND PROFESSIONAL SUPPORT IN THE
                  SCOPE OF TECHNICAL SOLUTIONS IN: POWER, MACHINE,
                  PETROCHEMICAL, MINING AND METALLURGICAL INDUSTRIES.
                </p>
              </div>
              <div className={a.rightServices}>
                <p className={a.textContent}>
                  For executed projects HPE 8 Sp. z o.o. offers the design and
                  preparation of specialized documentation to ensure the safe
                  and legal launching and utilization of customer products in
                  accordance with the requirements of EU, ASME, GOST. We are
                  experienced in consulting and assisting companies in obtaining
                  various types of certificates and permitting documents.
                  Moreover, HPE 8 Sp. z o. o. prepares the required
                  documentation for receiving GOST TR CU certificates. Also, we
                  are experts in the preparation of technical passports for
                  equipment that are important for achievement EAC certificates
                  for the TRCU 0032, TRCU 0010, TRCU 0012 standards.
                </p>
              </div>
            </div>
            <div className={a.DESIGNINGIMG}>
              <img src={img11} alt="img11" />
              <img src={img22} alt="img22" />
              <img src={img33} alt="img33" />
              <img src={img44} alt="img44" />
            </div>
          </div>
        </div>
      </div>
      <div className={a.designing2}>
        <div className={Component2}>
          <div className="two">
            <div className={a.src}>
              <div className={a.left}>
                <h2>CALCULATIONS</h2>
                <p>
                  WE OFFER DESIGN REALIZATION AND PROFESSIONAL SUPPORT IN THE
                  SCOPE OF TECHNICAL SOLUTIONS IN: POWER, MACHINE,
                  PETROCHEMICAL, MINING AND METALLURGICAL INDUSTRIES.
                </p>
              </div>
              <div className={a.rightServices}>
                <p className={a.textContent}>
                  For executed projects HPE 8 Sp. z o.o. offers the design and
                  preparation of specialized documentation to ensure the safe
                  and legal launching and utilization of customer products in
                  accordance with the requirements of EU, ASME, GOST. We are
                  experienced in consulting and assisting companies in obtaining
                  various types of certificates and permitting documents.
                  Moreover, HPE 8 Sp. z o. o. prepares the required
                  documentation for receiving GOST TR CU certificates. Also, we
                  are experts in the preparation of technical passports for
                  equipment that are important for achievement EAC certificates
                  for the TRCU 0032, TRCU 0010, TRCU 0012 standards.
                </p>
              </div>
            </div>
            <div className={a.DESIGNINGIMG}>
              <img src={img11} alt="img11" />
              <img src={img22} alt="img22" />
              <img src={img33} alt="img33" />
              <img src={img44} alt="img44" />
            </div>
          </div>
        </div>
      </div>
      <div className={a.designing}>
        <div className={Component2}>
          <div className="one">
            <div className={a.src}>
              <div className={a.left}>
                <h2>DESIGNING</h2>
                <p>
                  WE OFFER DESIGN REALIZATION AND PROFESSIONAL SUPPORT IN THE
                  SCOPE OF TECHNICAL SOLUTIONS IN: POWER, MACHINE,
                  PETROCHEMICAL, MINING AND METALLURGICAL INDUSTRIES.
                </p>
              </div>
              <div className={a.rightServices}>
                <p className={a.textContent}>
                  For executed projects HPE 8 Sp. z o.o. offers the design and
                  preparation of specialized documentation to ensure the safe
                  and legal launching and utilization of customer products in
                  accordance with the requirements of EU, ASME, GOST. We are
                  experienced in consulting and assisting companies in obtaining
                  various types of certificates and permitting documents.
                  Moreover, HPE 8 Sp. z o. o. prepares the required
                  documentation for receiving GOST TR CU certificates. Also, we
                  are experts in the preparation of technical passports for
                  equipment that are important for achievement EAC certificates
                  for the TRCU 0032, TRCU 0010, TRCU 0012 standards.
                </p>
              </div>
            </div>
            <div className={a.DESIGNINGIMG}>
              <img src={img11} alt="img11" />
              <img src={img22} alt="img22" />
              <img src={img33} alt="img33" />
              <img src={img44} alt="img44" />
            </div>
          </div>
        </div>
      </div>
      <div className={a.designing2}>
        <div className={Component2}>
          <div className="two">
            <div className={a.src}>
              <div className={a.left}>
                <h2>CALCULATIONS</h2>
                <p>
                  WE OFFER DESIGN REALIZATION AND PROFESSIONAL SUPPORT IN THE
                  SCOPE OF TECHNICAL SOLUTIONS IN: POWER, MACHINE,
                  PETROCHEMICAL, MINING AND METALLURGICAL INDUSTRIES.
                </p>
              </div>
              <div className={a.rightServices}>
                <p className={a.textContent}>
                  For executed projects HPE 8 Sp. z o.o. offers the design and
                  preparation of specialized documentation to ensure the safe
                  and legal launching and utilization of customer products in
                  accordance with the requirements of EU, ASME, GOST. We are
                  experienced in consulting and assisting companies in obtaining
                  various types of certificates and permitting documents.
                  Moreover, HPE 8 Sp. z o. o. prepares the required
                  documentation for receiving GOST TR CU certificates. Also, we
                  are experts in the preparation of technical passports for
                  equipment that are important for achievement EAC certificates
                  for the TRCU 0032, TRCU 0010, TRCU 0012 standards.
                </p>
              </div>
            </div>
            <div className={a.DESIGNINGIMG}>
              <img src={img11} alt="img11" />
              <img src={img22} alt="img22" />
              <img src={img33} alt="img33" />
              <img src={img44} alt="img44" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;
