import React from "react";
import "./Hero.scss";
const Hero = ({ title, bg, nav, img, desc, price }) => {
  console.log(title);
  return (
    <div className="container">
      <div style={{ background: bg }} className="hero__wrap">
        <b className="title">{title}</b>
        <div className="hero__nav">
          <ul className="hero__collection">
            {nav?.map((el, inx) => (
              <li key={inx} className="hero__item">
                <a href="">{el}</a>
              </li>
            ))}
          </ul>
          <div className="hero__img">
            <img src={img} alt="" />
          </div>
          <b className="hero__desc">{desc}</b>
          <p>{price}</p>
          <div className="hero__btn">
            <a href="">Learn more</a>

            <button>buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
