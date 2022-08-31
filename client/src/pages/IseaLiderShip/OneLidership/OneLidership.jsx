import React from "react";
import s from "./oneLidership.module.css";

import img from "../../../img/ISEA_Lidership/jafar.PNG";

const OneLidership = function (props) {
  console.log(props.obj);
  return (
    <>
      <div className={s.big}>
        <div className={"container" + " " + s.top}>
          <h1 className={s.title1}>ISEA Leadership</h1>
          <hr className={s.row} />
        </div>
        <div className={"container" + " " + s.topBox}>
          <div className={s.topBoxLeft}>
            <h1>Jafar Mirzaraximov</h1>
            <p>Team Leader of IT department</p>
          </div>
          <div className={s.topBoxRight}>
            <img src={img} alt="member" />
          </div>
        </div>
        <div className={"container" + " " + s.info}>
          <div className={s.infoLeft}>
            <p>
              {" "}
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
