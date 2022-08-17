import React from "react";
import Date from "../../components/Date/Date";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";
import s from "./publication.module.css";
import PublicationCard from "./PublicationCard/PublicationCard";
import Menu from "../../components/Menu/Menu";
import Router from "../../components/Router/Router";
import PublicationImage from "./PublicationImage/PublicationImage";
import image from "../../img/Publications/2.jpg";

export default function Publication() {
  return (
    <div className="container">
      <Search placeholder={"search publications"} />
      <Title name={"Latest Publications"} />
      <div className={s.latest}>
        <PublicationCard />
        <PublicationCard />
      </div>
      <Title name={"Featured Publications"} />
      <div className={s.featured}>
        <PublicationCard />
        <Menu title={"Browse by topic"}>
          <Router route={"/benefits"} name={"Benefits"} />
          <Router route={"/benefits"} name={"Costs"} />
          <Router route={"/benefits"} name={"Off-grid of energy"} />
          <Router route={"/benefits"} name={"Energy Transition"} />
          <Router route={"/benefits"} name={"Finance & Invesment"} />
          <Router route={"/benefits"} name={"See all"} />
        </Menu>
      </div>
      <Title name={"Explorer Futhers"} />
      <div className={s.futher}>
        <PublicationImage image={image} />
        <PublicationImage image={image} />
        <PublicationImage image={image} />
        <PublicationImage image={image} />
        <PublicationImage image={image} />
        <PublicationImage image={image} />
      </div>
      <div className={s.all}>see all</div>
      <Title name={"Our Collections"} />
    </div>
  );
}
