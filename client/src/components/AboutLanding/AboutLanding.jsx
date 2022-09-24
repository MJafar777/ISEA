import React from "react";
import { NavLink } from "react-router-dom";

import Title from "../Title/Title";
import img11 from "../../img/About/about-isea/1.avif";

export default function AboutLanding() {
  const text1 = `With 168 Members, ISEA plays a leading role in the energy transformation as a centre of excellence for knowledge and innovation, a global voice for renewables, a network hub and a source of advice and support  for countries.`;
  const text2 = ` As a part of its contribution to the Climate Investment Platform, ISEA invites financial  institutions, development organisations and private investors prepared to support the realisation of  projects and projects in need of support to register their interest.`;
  return (
    <section>
      <div className="container">
        <Title className="my-4" name="About us" />
        <span class="sr-only">Settings</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mini:space-x-reverse">
          <div className="col-span-1 sm:text-[1rem] md:text-[1.4rem] lg:text-[1.8rem]">
            <p className="">
              {text1} <br />
              <br /> {text2}
            </p>
            <NavLink
              className="flex items-center gap-2 sm:pt-4 md:pt-8 lg:pt-10 sm:text-[1rem] md:text-[1.6rem] lg:text-[2rem] text-[#0057BD]"
              to="/about"
            >
              <span className="sm:text-[1.6rem] md:text-[2rem]">Read more</span>
              <svg viewBox="0 0 32 32" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <path
                    fill="#0057BD"
                    d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"
                  />
                </g>
              </svg>
            </NavLink>
          </div>
          <div className="col-span-1">
            <NavLink to="/about">
              <img className="lg:w-[90%] float-right" src={img11} alt="aboutUsImg" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
