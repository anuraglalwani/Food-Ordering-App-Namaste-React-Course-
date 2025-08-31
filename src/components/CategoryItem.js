import CategoryList from "./CategoryList";
import "./CategoryItem.scss";
import { useState } from "react";

const CategoryItem = ({ data }) => {
  console.log(data, "datadatadata");
  const [showItemList, setShwowList] = useState(false);
  const handleClick = () => {
    setShwowList(!showItemList);
  };
  return (
    <div className="category-item-wrapper">
      <div className="category-item-header" onClick={handleClick}>
        <span className="title">{data?.title}</span>
        <span>↓</span>
      </div>
      {showItemList && <CategoryList cards={data?.itemCards} />}
    </div>
  );
};
export default CategoryItem;
