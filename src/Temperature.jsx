import React, { useState, useEffect } from "react";
import { GoStop } from "react-icons/go";

const Temperature = (props) => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(
        "/api/v1/process/read/nx4mmAV8Cx8AkO1AVQk437?datanodes=Temperature/temp01",
        {
          method: "get",
          headers: new Headers({
            Authorization:
              "Basic " + btoa("e2102779@vamk.fi:HennajaJoona123456"),
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
          });
        })
        .catch(function (err) {
          console.log("Fetch Error : ", err);
        });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const data = temp.map((value, key) => {
    return (
      <div key={key} className="box">
        <h2>Temperature </h2>
        {value.values.map((v, i) => {
          return (
            <div key={i}>
              {v.v < 0 ? (
                <h1 className="blue">{v.v}°C</h1>
              ) : (
                <h1 className="orange">{v.v}°C</h1>
              )}
              {v.v >= 7 ? (
                <GoStop size={30} color="red" className="icon" />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Temperature;
