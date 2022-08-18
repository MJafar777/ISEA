import Benefits from "../../components/RenewablesComponents/Benefits/Benefits";
import s from "./renewables.module.css";
// import Router from "../../components/Router/Router";

const Renewables = () => {
  return (
    <div className={s.container}>
      <Benefits />
      {/* <Router name={"BENEFITS"} route={"/benefits"} />
      <Router name={"CLIMATE CHANGE"} route={"/climate-change"} />
      <Router name={"ENERGY TRANSITION"} route={"/energy-transition"} />
      <Router name={"FINANCE & INVESTMENT"} route={"/finance-and-investment"} />
      <Router
        name={"BENEFITSHEATING & COOLING"}
        route={"/benefitsheating-and-cooling"}
      />
      <Router
        name={"INNOVATION & TECHNOLOGY"}
        route={"/innovation-technology"}
      />
      <Router name={"OFF-GRID FOR ENERGY ACCESS"} route={"/off-grid"} />
      <Router name={"POLICY"} route={"/policy"} />
      <Router name={"INDUCTRY & TRANSPORT"} route={"/inductry-transport"} />
      <Router name={"COSTS"} route={"/costs"} />
      <Router name={"ISLANDS"} route={"/islands"} />
      <Router name={"POWER"} route={"/power"} /> */}
    </div>
  );
};

export default Renewables;
