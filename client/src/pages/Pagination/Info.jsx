import React from "react";

const Info = function ({ info, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(info);
  return (
    <>
      {info.map((info) => {
        return (
          <li key={info.id} className="list-group-item">
            <h1>{info.title}</h1>
            {console.log(info.title)}
          </li>
        );
      })}
    </>
  );
};

export default Info;
