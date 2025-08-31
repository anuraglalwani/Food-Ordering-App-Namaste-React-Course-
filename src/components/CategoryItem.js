import CategoryList from "./CategoryList";
import "./CategoryItem.scss";
import { useState } from "react";

const CategoryItem = ({ data, handleClick, openCategoryId }) => {
  return (
    <div className="category-item-wrapper">
      <div
        className="category-item-header"
        onClick={() => handleClick(data?.categoryId)}
      >
        <span className="title">{data?.title}</span>
        <span>↓</span>
      </div>
      {data?.categoryId === openCategoryId && (
        <CategoryList cards={data?.itemCards} />
      )}
    </div>
  );
};
export default CategoryItem;
