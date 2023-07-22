import React, { useState, useEffect } from "react";

export function GetHelloWorld() {
    const [data, setData] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5000')
          .then((response) => response.json())
          .then((data) => {
             setData(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return <div>{data.voltage}</div>
}