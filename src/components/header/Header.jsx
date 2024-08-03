import React from "react";
import "./Header.scss";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const nav = [
  "Shop",
  "Al",
  "Mobail ",
  "TV&Audio",
  "Appliances",
  "Computing",
  "Display",
  "Accessorues",
  "SmartThings",
];
const nav2 = ["Explore", "Support", "For bussines"];
const Header = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div>
          <b>SAMSUNG</b>
        </div>
        <ul className="nav__collection">
          {nav?.map((el, inx) => (
            <li key={inx} className="nav__item">
              <a href="">{el}</a>
            </li>
          ))}
        </ul>
        <ul className="nav2__collection">
          {nav2?.map((el, inx) => (
            <li key={inx} className="nav__item">
              <a href="">{el}</a>
            </li>
          ))}
        </ul>
        <div className="nav__icons">
          <CiSearch />
          <VscAccount />
          <BsCart3 />
          <div className="menu">
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
