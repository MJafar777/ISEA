import React from "react";
import s from "./review.module.css";
import userImage from "../../img/SignUp/75.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const user = useSelector((store) => store.auth.user);
  return (
    <>
      <div className={s.review}>
        <div>
          <form>
            <input type="text" placeholder="Leave a comment" />
            <button>OK</button>
          </form>
          <div className={s.comments}>
            <div className={s.comment}>
              <div className={s.image}>
                <img src={userImage} className={s.imageUser} />
              </div>
              <div className={s.contentComment}>
                <div>
                  <span className={s.username}>{user?.name}</span>
                  <span className={s.date}>12 March</span>
                </div>
                <h4>Zur kitob ekan</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
