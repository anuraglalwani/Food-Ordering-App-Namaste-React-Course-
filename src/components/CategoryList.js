import React from "react";

function CategoryList({ cards }) {
  return (
    <div className="categoryList">
      {cards?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="list">
            <p className="name">{item?.card?.info?.name}</p>
            <p className="description">{item?.card?.info?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;
