import React, { useState, useEffect } from "react";
import s from "./oneLidership.module.css";
import { NavLink, useParams } from "react-router-dom";

import img1 from "../../../img/ISEA_Lidership/jafar.PNG";
import img2 from "../../../img/ISEA_Lidership/niyozbek.png";
import img3 from "../../../img/ISEA_Lidership/jafar.PNG";

const OneLidership = function (props) {
  let userId = useParams().id;
  let arr = [img1, img2, img3];
  const [count, setCount] = useState("{}");
  const [img, setImg] = useState("");
  useEffect(() => {
    props.obj.forEach((element) => {
      if (element.id == userId) {
        setCount(element);
      } else {
        return;
      }
    });
    arr.forEach((arr) => {
      let len = arr.split("/").length;
      let img =
        arr.split("/")[len - 1].split(".")[0] +
        "." +
        arr.split("/")[len - 1].split(".")[2];
      if (count.img == img) {
        setImg(arr);
      }
    });
  });

  return (
    <>
      <div className={s.big}>
        <div className={"container" + " " + s.top}>
          <h1 className={s.title1}>ISEA Leadership</h1>
          <hr className={s.row} />
        </div>
        <div className={"container" + " " + s.topBox}>
          <div className={s.topBoxLeft}>
            <h1>{count.name}</h1>
            <p>{count.status}</p>
          </div>
          <div className={s.topBoxRight}>
            <img src={img} alt="member" />
          </div>
        </div>
        <div className={"container" + " " + s.info}>
          <div className={s.infoLeft}>
            <p>
              {count.name} <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              placeat ducimus nesciunt alias sed consequatur nihil odio beatae,
              cumque sunt tempora omnis dolore quam quo laudantium dignissimos
              voluptates magni temporibus, cum perspiciatis facere. Earum
              voluptas at aspernatur ipsam, velit enim cum sint iure minima
              <br />
              nihil excepturi commodi sed ducimus modi porro unde veniam
              consequuntur nobis. Error repellendus impedit accusantium nisi
              ullam perferendis, eius quod quia illum eveniet temporibus
              officiis similique at minima. Mollitia eligendi quibusdam
              <br />
              molestias soluta id suscipit ad quas repellat eos quaerat velit
              nam necessitatibus at veritatis dolorem, incidunt in cumque
              quisquam ipsam, libero ipsa maiores repellendus consequatur?
            </p>
          </div>
          <div className={s.infoRight}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quaerat reiciendis nisi, et tenetur quis unde natus voluptatem!
              Cum, similique. Omnis itaque maiores dolorem, at tenetur
              <br />
              reiciendis ex fuga expedita accusantium laudantium. Quia, rerum
              officiis cupiditate consequatur porro eius. Maiores cumque earum
              cupiditate quia ipsam facilis eaque iure dolor quaerat officiis
              cum recusandae fugiat delectus enim aliquid veniam odio
              <br />
              repudiandae asperiores ad, voluptatem nihil. Numquam nostrum error
              odit eaque eligendi modi sit exercitationem molestiae harum veniam
              quod mollitia quaerat, nihil autem, qui officia nemo. Natus
              veritatis mollitia aperiam tenetur, soluta culpa blanditiis
              perspiciatis atque accusantium ratione, dicta sequi, deleniti
              sint.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLidership;
