import React from "react";
import s from "./advanced.module.css";

export default function AdvancedSettings() {
  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Settings</h2>
        <div className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.input}>
        <form action="" className={s.form}>
          <input
            type="text"
            name="work_place"
            placeholder="Enter your work place"
          />
          <input
            type="text"
            name="position"
            placeholder="Enter your position"
          />
          <select name="type_of_activity" id="type_of_activity">
            <option value="Businessman">Businessman</option>
            <option value="Farmer">Farmer</option>
            <option value="Student">Student</option>
            <option value="Pensioner">Pensioner</option>
            <option value="Other">Other</option>
          </select>
          <select name="academic_degree" id="academic_degree">
            <option value="Doctor">Doctor of science</option>
            <option value="Candidate">Candidate of science</option>
            <option value="none">No Academic Degree</option>
          </select>
          <select name="degree" id="degree">
            <option value="middle">Middle degree</option>
            <option value="high">High degree</option>
            <option value="none">No degree</option>
          </select>
          <input type="text" name="stir" placeholder="STIR" />
          <input type="text" name="cardNum" placeholder="Card number" />
          <button type="submit">ADD</button>
        </form>
      </div>
    </>
  );
}
