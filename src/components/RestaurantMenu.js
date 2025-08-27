import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Shimmer from './Shimmer';
import ShimmerMenu from "./ShimmerMenu";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <></>;

  const { brand, thumbnail, category, rating, title, price } = resInfo;

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={resInfo?.thumbnail} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{title}</h1>
            <h3>{category}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{rating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <FiClock />
              </span>
              <span> {brand} brand</span>
            </h4>
            <h3>{price}</h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RestaurantMenu;
