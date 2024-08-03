import React from "react";
import "./main.scss";
import Hero from "./hero/Hero";
import flip from "../../assets/flip.png";
import tvv from "../../assets/tv.png";
// import tvv from "../../assets/tv.png";
import xoladilnik from "../../assets/xoladilnik.png";

const flipitem = [
  "Galaxy Z Flip6",
  "Galaxy Z Fold6",
  "Galaxy Watch Ultra",
  " Galaxy Buds3 Pro",
  " Galaxy Experience",
];
const tv = ["Samsung Neo QLED 8k", "TV + Soundbar bundles", " Q990D"];
const xl = ["Bespoke Appliances", "Bespoke Refrigerators", " Bespoke Laundry"];
const Main = () => {
  return (
    <>
      <Hero
        bg={"#f4f4f4"}
        title={"Mobile & Computing"}
        nav={flipitem}
        img={flip}
        desc={"Galaxy Z Flip6"}
        price={
          "get up to $650 instate tride-in credit and double the storage on us with select color"
        }
      />
      <Hero
        bg={
          "linear-gradient(90deg,rgb(165, 97, 42),rgb(172, 112, 2),rgb(161, 127, 64),rgb(165, 97, 42),rgb(172, 112, 2))"
        }
        title={"TV & Audio"}
        nav={tv}
        img={tvv}
        desc={"Discover new depth of detail"}
        price={
          "buy on $65 instate tride-in class Samsung Neo the storage on us with select color"
        }
      />
      <Hero
        bg={"#f4f4f4"}
        title={"Home Appliances"}
        nav={xl}
        img={xoladilnik}
        desc={"Save on bespoke all summer"}
        price={
          "get  $1300 instate tride-in Bespoke model from Amerika select color"
        }
      />
    </>
  );
};

export default Main;
