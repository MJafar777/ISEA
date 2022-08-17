import React from "react";
import Date from "../../components/Date/Date";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";
import s from "./publication.module.css";
import PublicationCard from "./PublicationCard/PublicationCard";
import Menu from "../../components/Menu/Menu";

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
        <Menu />
      </div>
    </div>
  );
}
