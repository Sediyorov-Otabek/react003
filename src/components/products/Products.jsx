import React from "react";
import phone from "../../assets/01-Q6-Black-1600x1200.avif";
import ipods from "../../assets/SCOMB6Q6-887-SM-R630_001_Front_Silver_RGB-1600x1200.avif";
import watch from "../../assets/SCOMB6Q6-59-SM-L300_001_Front_Cream-1600x1200.avif";
import fold from "../../assets/01-B6-CraftedBlack-1600x1200.avif";
import s24 from "../../assets/01_E2_AmberYellow_Lockup_1600x1200.avif";
import tv from "../../assets/LS32CM701UNXZA.avif";

const pitem = [
  "For You",
  "Top Deals",
  "Mobile",
  "Tv&Audio",
  "Home Appliances",
  " Computing",
];
const CardItem = [
  {
    image: phone,
    title: "Galaxy Z fold6, 512GB ()UNLOCKED",
    price: "save up tu $1200",
    from: "From $189652.2 before eligible tride in",
  },
  {
    image: ipods,
    title: "Galaxy Buds3 Pro",
    price: "save up tu $100",
    from: "From $182.2 before eligible tride in",
  },
  {
    image: watch,
    title: "Galaxy Watch7,40mm",
    price: "save up tu $250",
    from: "From $299.22 before eligible tride in",
  },
  {
    image: fold,
    title: "Galaxy Z fold6, 512GB ()UNLOCKED",
    price: "save up tu $650",
    from: "From $1299.22 before eligible tride in",
  },
  {
    image: s24,
    title: "Galaxy S24+,256GB",
    price: "save up tu $600",
    from: "From $999.22 before eligible tride in",
  },
  {
    image: tv,
    title: "Galaxy 32 Smart Monitoring UHD with stream TV",
    price: "save up tu $600",

    from: "From $999.22 before eligible tride in",
  },
];
const Products = () => {
  return (
    <div className="container">
      <div className="product__wrap">
        <b>Shop all latest offers and innovations</b>
        <a href="">
          <i>View all offers</i>
        </a>
        <div className="product__nav">
          {pitem?.map((el, inx) => (
            <a key={inx} href="">
              <p>{el}</p>
            </a>
          ))}
        </div>
        <div className="product__card__wrap">
          {CardItem?.map((el, inx) => (
            <div key={inx} className="card">
              <i>new</i>
              <div className="img">
                <img src={el.image} alt="" />
              </div>
              <strong>{el.title}</strong>
              <p>{el.price}</p>
              <span>{el.from}</span>
              <button>buy now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
