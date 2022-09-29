import React from "react";
import"../news.css";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import image1 from './22.avif'

const NewsCard = ({ title,text,category, image, id, date }) => {
  return (
    
    // <div className={s.box2 + " " + s.box}>
    //   <img src={"http://localhost:8000/img/news/" + image} alt={title} />
    //   <NavLink to={"/news/" + id}>
    //     <div className={s.bottom}>
    //       <div className={s.text1}>
    //         <p>
    //           <Moment format="YYYY/MM/DD" date={date} />
    //         </p>
    //       </div>
    //       <div className={s.subTitle1}>
    //         <h1>{title}</h1>
    //       </div>
    //     </div>
    //   </NavLink>
    // </div>

    
    <div className="newsCard">
      <NavLink to={"/news/" + id}>
     <img className="cardNewImg" src={image1} alt="" />  </NavLink>
     <div className="cateTime">

      <span className="catename">{category} World</span>
       <span> <Moment format="YYYY/MM/DD" date={date} /></span>
       </div>
 <NavLink to={"/news/" + id}>
     <div className="titleNew">{title}</div> </NavLink>
     <div className="textNew">{text}</div>
     <NavLink to={"/news/" + id}>  <div className="readMore">Read More →</div> </NavLink>

    </div>



  );
};

export default NewsCard;
