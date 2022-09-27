import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group hover:bg-[#222] hover:text-white">
            <h1
              className="py-3 flex justify-between items-center md:pr-0 pr-5 group "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-19 hidden group-hover:md:block hover:md:block">
                  <div className="py-[6px]">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-0">
                    {link.sublinks.map((mysublinks, index) => (
                      <div className="hover:bg-[#222] text-inherit p-4 group" key={index}>
                        <Link
                          to={mysublinks.link}
                          className="text-[#222] border-solid lg:text-2xl md:text-lg font-bold group-hover:text-white"
                        >
                          {mysublinks.Head}
                        </Link>
                        {mysublinks.isSublink &&
                          mysublinks.sublink.map((slink, index) => (
                            <li key={index} className="lg:text-[1.2rem] md:text-[1rem] text-gray-600 my-2.5">
                              <Link to={slink.link} className="hover:text-primary">
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() => (subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading(""))}
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
