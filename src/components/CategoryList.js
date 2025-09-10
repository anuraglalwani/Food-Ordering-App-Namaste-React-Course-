import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";
import "./CategoryList.scss";

function CategoryList({ cards }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="categoryList">
      {cards?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="list">
            <p className="name">{item?.card?.info?.name}</p>
            <p className="description">{item?.card?.info?.description}</p>
            <span onClick={() => handleAddItem(item)}>Add item ＋</span>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;
