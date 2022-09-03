import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import s from "./advanced.module.css";
import { advancedProfile } from "../../../../store/authSlice";

export default function AdvancedSettings() {
  const dispatch = useDispatch();
  const cardNumRef = useRef();
  const workPlaceRef = useRef();
  const stirRef = useRef();
  const positionRef = useRef();
  const typeOfActivityRef = useRef();
  const academicDegreeRef = useRef();
  const degreeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const cardNum = cardNumRef.current.value;
    const work_place = workPlaceRef.current.value;
    const stir = stirRef.current.value;
    const position = positionRef.current.value;
    const academic_degree = academicDegreeRef.current.value;
    const degree = degreeRef.current.value;
    const type_of_activity = typeOfActivityRef.current.value;

    dispatch(
      advancedProfile({
        cardNum,
        work_place,
        stir,
        position,
        academic_degree,
        degree,
        type_of_activity,
      })
    );
  };
  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Settings</h2>
        <div className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.input}>
        <form className={s.form}>
          <input
            ref={workPlaceRef}
            type="text"
            name="work_place"
            placeholder="Enter your work place"
          />
          <input
            ref={positionRef}
            type="text"
            name="position"
            placeholder="Enter your position"
          />
          <select
            ref={typeOfActivityRef}
            name="type_of_activity"
            id="type_of_activity"
          >
            <option value="Businessman">Businessman</option>
            <option value="Farmer">Farmer</option>
            <option value="Student">Student</option>
            <option value="Pensioner">Pensioner</option>
            <option value="Other">Other</option>
          </select>
          <select
            ref={academicDegreeRef}
            name="academic_degree"
            id="academic_degree"
          >
            <option value="Doctor">Doctor of science</option>
            <option value="Candidate">Candidate of science</option>
            <option value="none">No Academic Degree</option>
          </select>
          <select ref={degreeRef} name="degree" id="degree">
            <option value="middle">Middle degree</option>
            <option value="high">High degree</option>
            <option value="none">No degree</option>
          </select>
          <input ref={stirRef} type="text" name="stir" placeholder="STIR" />
          <input
            ref={cardNumRef}
            type="text"
            name="cardNum"
            placeholder="Card number"
          />
          <button onClick={submitHandler}>ADD</button>
        </form>
      </div>
    </>
  );
}
