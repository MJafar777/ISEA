import React from "react";
import Title from "../../../components/Title/Title";
import Menu from "../../../components/Menu/Menu";
import Router from "../../../components/Router/Router";

export default function PublicationBook({ name }) {
  return (
    <div className="content">
      <div>
        <Title name={name} />
      </div>
      <div>
        <Menu title={"Browse by topic"}>
          <Router route={"/benefits"} name={"Benefits"} />
          <Router route={"/benefits"} name={"Costs"} />
          <Router route={"/benefits"} name={"Off-grid of energy"} />
          <Router route={"/benefits"} name={"Energy Transition"} />
          <Router route={"/benefits"} name={"Finance & Invesment"} />
          <Router route={"/benefits"} name={"See all"} />
        </Menu>
      </div>
    </div>
  );
}
