import React from "react";
import "./news.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetNews } from "../../store/newsSlice";
import NewsCard from "./NewsCard/NewsCard";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import PopularNews from "./PopularNews/PopularNews";
import News from '../../components/News/News'



export default function Newsroom() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetNews());
  }, []);

  const news = useSelector((store) => store.news.news);

  return (
    <div className="container">

    <div className="topNews1">

<div className="row">
   <div className="col-6">
  <NewsCard title='Lorem ipsum dolor sit amet' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum. Voluptatibus sapiente quia aut minima dignissimos tempora quasi mollitia voluptas, modi maxime ipsum provident nulla minus voluptate id molestiae dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum. Voluptatibus sapiente quia aut minima dignissimos tempora quasi mollitia voluptas, modi maxime ipsum provident nulla minus voluptate id molestiae dolore.' />
  </div>
  <div className="col-6">
  <div className="row">
    <div className="col-6 sizewidth "><NewsCard    title='Lorem ipsum dolor sit amet' /></div>
    <div className="col-6 sizewidth "><NewsCard    title='Lorem ipsum dolor sit amet' /></div>
    <div className="col-6 sizewidth "><NewsCard    title='Lorem ipsum dolor sit amet' /></div>
    <div className="col-6 sizewidth "><NewsCard    title='Lorem ipsum dolor sit amet' /></div>


  </div>
  
  </div>
  
  </div>
     



    
      
    </div>

    <div className="popularNews">

<PopularNews/>

    </div>

    <News/>





      {/* <div className={s.news}>
        {news && (
          <NavLink to={"/news/1"} className={s.box1 + " " + s.box}>
            <img
              src={"http://localhost:8000/img/news/" + news[0]?.photo}
              alt={news[0]?.title}
            />
            <div>
              <div className={s.bottom}>
                <div className={s.text}>
                  <p>
                    <Moment format="YYYY/MM/DD" date={news[0]?.createdAt} />
                  </p>
                </div>
                <div className={s.subTitle}>
                  <h1>{news[0]?.title}</h1>
                </div>
              </div>
            </div>
          </NavLink>
        )}
        {news.map((val, key) => (
          <NewsCard
            key={key}
            title={val.title}
            image={val.photo}
            id={val._id}
            date={val.createdAt}
          />
        ))}
      </div> */}

    </div>
  );
}
