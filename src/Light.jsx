import React, { useState, useEffect } from "react";
import { GoStop } from "react-icons/go";

const Light = (props) => {
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    fetch(
      "/api/v1/process/read/nx4mmAV8Cx8AkO1AVQk437?datanodes=Light/light01",
      {
        method: "get",
        headers: new Headers({
          Authorization: "Basic " + btoa("authkey"),
          "Content-Type": "application/json",
        }),
      }
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(function (data) {
          setTemp(data.datanodeReads);
          console.log(data.datanodeReads);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error : ", err);
      });
  }, []);
  const data = temp.map((value, key) => {
    return (
      <div key={key} className="box">
        <h2>Light </h2>
        {value.values.map((v, i) => {
          return (
            <div key={i}>
              {v.v > 4 ? (
                <div>
                  <h1 className="red">ON</h1>
                  <GoStop size={30} color="red" className="icon" />
                </div>
              ) : (
                <h1 className="green">OFF</h1>
              )}
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Light;
