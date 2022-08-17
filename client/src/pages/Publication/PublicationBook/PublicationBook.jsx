import React from "react";
import s from "./publicationBook.module.css";
import Title from "../../../components/Title/Title";
import Menu from "../../../components/Menu/Menu";
import Router from "../../../components/Router/Router";
import PublicationImage from "../PublicationImage/PublicationImage";
import image from "../../../img/Publications/3.jpg";

export default function PublicationBook({ name, date, isbn }) {
  const container = s.content + " " + "container";
  return (
    <div className={container}>
      <div>
        <Title name={name} />
        <div className={s.book}>
          <div>
            <PublicationImage image={image} />
            <p className={s.date}>{date}</p>
            <p className={s.isbn}>ISBN: {isbn}</p>
            <form action="/" method="post">
              <button type="submit">Download</button>
            </form>
          </div>
          <div>
            <h2 className={s.title}>Download Renewable energy highlights</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
          </div>
        </div>
      </div>
      <div>
        <Menu title={"Browse by topic"}>
          <Router route={"/benefits"} name={"Benefits"} />
          <Router route={"/costs"} name={"Costs"} />
          <Router route={"/gridenergy"} name={"Off-grid of energy"} />
          <Router route={"/transition"} name={"Energy Transition"} />
          <Router route={"/finances"} name={"Finance & Invesment"} />
          <Router route={"/see"} name={"See all"} />
        </Menu>
      </div>
    </div>
  );
}
