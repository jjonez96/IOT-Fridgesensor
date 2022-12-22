import React, { useState, useEffect } from "react";

const Status = (props) => {
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    fetch(
      "/api/v1/process/read/nx4mmAV8Cx8AkO1AVQk437?datanodes=Device_Online/online01",
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
        });
      })
      .catch(function (err) {
        console.log("Fetch Error : ", err);
      });
  }, []);
  const data = temp.map((value, key) => {
    return (
      <div key={key} className="box">
        <h2>Sensor status </h2>
        {value.values.map((v, i) => {
          return (
            <div key={i}>
              {v.v === "on" ? (
                <h1 className="green">ON</h1>
              ) : (
                <h1 className="red">OFF</h1>
              )}
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Status;
