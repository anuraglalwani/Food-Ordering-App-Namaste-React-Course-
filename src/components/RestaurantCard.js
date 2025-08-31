import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  console.log("in RestaurantCard ", props?.idx);
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pyf1bduaaxxlahonki69"
          }
          alt="Biryani"
        />
      </div>

      <div className="res-card-content">
        <h3>{"K C Das"}</h3>
        <hr />
        <em>{["Abc , xyx"].join(", ")}</em>
        <h4 className="avg-rating">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{5} stars</span>
        </h4>
        <h4 className="item-price">₹ {4000 / 100} FOR TWO</h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <span> {23} minutes</span>
        </h4>
      </div>
    </div>
  );
};

export const cardWithLabel = (RestaurantCard) => {
  const HOC = (props) => {
    console.log("in HOC ", props?.idx);
    return (
      <div>
        <label
          style={{
            position: "absolute",
            margin: "3px",
            padding: "3px",
            background: "black",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
  return HOC;
};

export default RestaurantCard;
