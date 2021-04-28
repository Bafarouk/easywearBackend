import React, { useEffect, useState } from "react";
import "./ColorPalette.css";
import rgbToHex from "rgb-to-hex";
import mydata from "./colorData.json";
const ColorPalette = (props) => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./colorData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // Take the color palette
  const { backgroundColor, color, alternativeColor } = props.palette;
  //console.log(props);
  return (
    <>
      {" "}
      <div className="paletteDiv" style={{ width: 333, height: 40 }}>
        <span
          style={{ color: color, backgroundColor: color, width: 111, high: 60 }}
        >
          aaaaaaaaaaaaaaa
        </span>

        <span
          style={{ color: backgroundColor, backgroundColor: backgroundColor }}
        >
          aaaaaaaaaaaaaaaaa
        </span>
        <span
          style={{ backgroundColor: alternativeColor, color: alternativeColor }}
        >
          aaaaaaaaaaaaaaa
        </span>
      </div>
    </>
  );
};

export default ColorPalette;
