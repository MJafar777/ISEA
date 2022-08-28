import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import img from "../../img/enginier/backEnergy.jpg";
import img2 from "../../img/enginier/img.jpg";
import img3 from "../../img/enginier/shamolEnergy.jpg";

import a from "./engineering.module.css";
import Title from "../../components/Title/Title";

import img111 from "../../img/hero-Slider/3.jpg";
import img222 from "../../img/hero-Slider/4.jpg";
import img333 from "../../img/hero-Slider/5.jpg";
import img444 from "../../img/hero-Slider/6.jpg";
import img11 from "../../img/factory/1.jpg";
import img22 from "../../img/factory/2.jpg";
import img33 from "../../img/factory/3.jpg";
import img44 from "../../img/factory/4.jpg";
import img55 from "../../img/factory/5.jpg";
import img66 from "../../img/factory/6.jpg";
import img77 from "../../img/factory/7.jpg";
import img88 from "../../img/factory/8.jpg";
import img99 from "../../img/factory/9.jpg";

const Engineering = () => {
  const Component = a.engineeringTitle + " " + "container";
  const Component2 = a.DESIGNING + " " + "container";

  return (
    <>
      <div className={a.parnet}>
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
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img11} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img22} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img33} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img44} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img55} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img66} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img77} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img88} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/shablon2"} className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img99} alt="img3" />
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
              <img src={img99} alt="img11" />
              <img src={img22} alt="img22" />
              <img src={img333} alt="img33" />
              <img src={img111} alt="img44" />
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
              <img src={img55} alt="img11" />
              <img src={img66} alt="img22" />
              <img src={img77} alt="img33" />
              <img src={img88} alt="img44" />
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
              <img src={img111} alt="img11" />
              <img src={img222} alt="img22" />
              <img src={img333} alt="img33" />
              <img src={img444} alt="img44" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;
