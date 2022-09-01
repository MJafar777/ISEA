import React from "react";
import Iframe from "react-iframe";
import s from "./AboutContactPage.module.css";
const AboutContactPage = () => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.wrapper}>
          {/* <!-- COMPANY INFORMATION --> */}
          <div className={s.companyInfo}>
            <h3 className={s.title}>ISEA</h3>

            <ul>
              <li>
                <i className={s.fa + " " + s.faRoad}></i> Yunusobod t.
              </li>
              <li>
                <i className={s.fa + " " + s.faPhone}></i> +(998)97777-37-67
              </li>
              <li>
                <i className={s.fa + " " + s.faEnvelope}></i>{" "}
                Mirzaraximovjafar2001@gmail.com
              </li>
            </ul>
            <div>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5992.238977909958!2d69.291839!3d41.328015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55ac32e5c2528644!2zNDHCsDE5JzQwLjkiTiA2OcKwMTcnMzAuNiJF!5e0!3m2!1sru!2s!4v1661855797858!5m2!1sru!2s"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
                allowfullscreen=""
              />
            </div>
          </div>
          {/* <!-- End .company-info --> */}

          {/* <!-- CONTACT FORM --> */}
          <div className={s.contact}>
            <h3>E-mail Us</h3>

            <form
              id={s.contactForm}
              onSubmit={(e) => {
                console.log(e);
                e.target[0].value = "";
                e.target[1].value = "";
                e.target[2].value = "";
                e.target[3].value = "";
                e.target[4].value = "";
                e.target[5].value = "";
                e.preventDefault();
              }}
            >
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p className={s.full}>
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>

              <p className={s.full}>
                <button className={s.button} type="submit">
                  Submit
                </button>
              </p>
            </form>
            {/* <!-- End #contact-form --> */}
          </div>
          {/* <!-- End .contact --> */}
        </div>
        {/* <!-- End .wrapper --> */}
      </div>
      {/* <!-- End .container --> */}
    </div>
  );
};

export default AboutContactPage;

// import React from "react";
// import Title from "../../../components/Title/Title";
// import s from "./AboutContactPage.module.css";
// import contact from "../../../img/hero-Slider/contact.jpg";
// import Menu from "../../../components/Menu/Menu";

// import city1 from "../../../img/hero-Slider/4.jpg";
// import city2 from "../../../img/hero-Slider/6.jpg";
// import city3 from "../../../img/hero-Slider/7.jpg";
// import team from "../../../img/hero-Slider/team.jpg";

// const AboutContactPage = () => {
//   const arr = [
//     "Coalition for Action",
//     "Data Statistics",
//     "Costs",
//     "Develop a project (Project Navigator)",
//     "Find investors/fund a project (Sustainable Energy Marketplace)",
//     "Get funded (IRENA/ADFD Project Facility)",
//     "Locate a project site (Global Atlas)",
//     "Media Inquiries",
//   ];

//   return (
//     <div className="container">
//       <Title name={"Contact"} />
//       <img src={contact} alt="contact" className={s.contact} />
//       <div className={s.contactUs}>
//         <div className={s.containerInfo}>
//           <div className={s.leftContainer}>
//             <div className={s.contactTitle}>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city1} alt="city1" />
//                 <h2>ISEA Headquarters</h2>
//                 <p>Masdar City</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+97124179000</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city2} alt="city2" />
//                 <h2>ISEA Innovation and Technology Centre</h2>
//                 <p>Willy-Brandt-Allee 20</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+49 228 391 79085</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city3} alt="city3" />
//                 <h2>
//                   ISEA Office of the Permanent Observer to the United Nations
//                 </h2>
//                 <p>Uganda House</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+16467382014</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city3} alt="city3" />
//                 <h2>
//                   ISEA Office of the Permanent Observer to the United Nations
//                 </h2>
//                 <p>Uganda House</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+16467382014</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city2} alt="city2" />
//                 <h2>ISEA Innovation and Technology Centre</h2>
//                 <p>Willy-Brandt-Allee 20</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+49 228 391 79085</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//               <div className={s.contactTitleChild}>
//                 <img className={s.city} src={city3} alt="city3" />
//                 <h2>
//                   ISEA Office of the Permanent Observer to the United Nations
//                 </h2>
//                 <p>Uganda House</p>
//                 <p>P.O. Box 236, Abu Dhabi</p>
//                 <p>United Arab Emirates</p>
//                 <h4>+16467382014</h4>
//                 <h4>info@irena.org</h4>
//               </div>
//             </div>
//             {/* <hr className={s.hrr} /> */}
//             <div>
//               <Title name={"Plan Your Visit"} />
//               <div className={s.titleTeam}>
//                 <img className={s.team} src={team} alt="team" />
//                 <div>
//                   <p>
//                     A visit to the IRENA Abu Dhabi Headquarters is customised to
//                     the visitors’ interests and needs, and can include hearing
//                     from IRENA experts in various fields of renewable energy and
//                     the global energy transition.
//                   </p>
//                   <p>Download and complete the Visit Request Form.</p>
//                   <p>
//                     E-mail the completed form to communications@irena.org to
//                     arrange your visit and learn more about who we are and what
//                     we do.
//                   </p>
//                 </div>
//               </div>
//               <div className={s.titleTeam}>
//                 <div>
//                   <p>
//                     A visit to the IRENA Abu Dhabi Headquarters is customised to
//                     the visitors’ interests and needs, and can include hearing
//                     from IRENA experts in various fields of renewable energy and
//                     the global energy transition.
//                   </p>
//                   <p>Download and complete the Visit Request Form.</p>
//                   <p>
//                     E-mail the completed form to communications@irena.org to
//                     arrange your visit and learn more about who we are and what
//                     we do.
//                   </p>
//                 </div>
//                 <img className={s.team} src={team} alt="team" />
//               </div>
//             </div>
//           </div>
//           {/* <hr /> */}
//           {/* <div className={s.RightContainer}>
//             <Title name={"Contact"} />
//             <Menu />
//           </div> */}
//         </div>
//         {/* <hr /> */}
//         {/* <div className={s.otherContact}>
//           <Title name={"Other contacts"} />
//           <div className={s.otherContactInfo}>
//             <div className={s.contactInfo1}></div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AboutContactPage;
