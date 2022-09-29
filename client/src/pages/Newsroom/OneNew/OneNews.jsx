import React from "react";
// import s from "./oneNews.module.css";
import './oneNews.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetNews, GetOne } from "../../../store/newsSlice";
import NewsCard from "../NewsCard/NewsCard";
import img1 from '../NewsCard/22.avif';
import Title from '../../../components/Title/Title'

const OneNews = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOne({ id }));
    dispatch(GetNews());
  }, [id]);
  const oneNews = useSelector((store) => store.news.oneNews);
  const news = useSelector((store) => store.news.news);

  return (
    <>
      <div className="container oneNews">

        {/* <div className={s.one}>
          <div className={s.rightSide}>
            <h1 className={s.oneTitle}>{oneNews.title}</h1>
            <div className={s.box1 + " " + s.box}>
              <img
                src={"http://localhost:8000/img/news/" + oneNews.photo}
                alt={oneNews.title}
              />
            </div>
            <div className={s.newsInfo}>
              <p>{oneNews.description}</p>
            </div>
          </div>
          <div className={s.leftSide}>
            {news.map((val, key) => (
              <NewsCard
                key={key}
                title={val.title}
                image={val.photo}
                id={val._id}
              />
            ))}
          </div>
        </div> */}
        
<div className='one'> 
<div className="col-9  ">
<h1 className="titleh1">Politics</h1>
  <div className="imgtitle">
    
        <img className="imgOneBig" src={img1} alt="" />
        <div className="catg"> Congress</div>
             <h2> Lorem ipsum, dolor sit  </h2>
             <span> 22.09.2022</span>
  </div>
  <div className="oneNewsText">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nobis error? Itaque atque molestias quibusdam ducimus corrupti minima omnis nemo consequuntur repudiandae eos, nisi repellat earum sapiente inventore est autem?
  </div>
      
        </div>


        <div className="col-3 ">
          <h1 className="titleh1">Related News</h1>
          <div className='newsqq'> 
          <NewsCard title='hasdasda asdad'  />
          </div>
          <div className='newsqq'> 
          <NewsCard title='hasdasda asdad'  />
          </div>
          <div className='newsqq'> 
          <NewsCard title='hasdasda asdad'  />
          </div>
          
          
        </div>   </div>

       


      </div>
    </>
  );
};

export default OneNews;
