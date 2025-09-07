import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Shimmer from './Shimmer';
import ShimmerMenu from "./ShimmerMenu";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import CategoryItem from "./CategoryItem";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [categoryCards, setCategoryCards] = useState([]);
  const [openedCategoryId, setOpenCategoryId] = useState(0);
  const { resId } = useParams();
  const fetchData = async () => {
    const result = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9246566&lng=77.6102207&restaurantId=36464&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
    );
    const json = await result.json();
    const cards =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categoryCardsArr = cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setCategoryCards(categoryCardsArr);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <></>;

  const { brand, thumbnail, category, rating, title, price } = resInfo;
  const handleClick = (id) => {
    if (openedCategoryId === id) {
      setOpenCategoryId(null);
    } else {
      setOpenCategoryId(id);
    }
  };

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
      <div>
        {categoryCards?.map((category, id) => {
          return (
            <div key={id}>
              <CategoryItem
                // index={id}
                data={category?.card?.card}
                handleClick={handleClick}
                openCategoryId={openedCategoryId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
