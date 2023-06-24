import React from "react";
import CategoryButton from "./CategoryButton";


const ButtonList = () => {
  return (
    <div className="flex flex-row">
      <CategoryButton name="All"/>
      <CategoryButton name="Mixes"/>
      <CategoryButton name="Music"/>
      <CategoryButton name="Comedy"/>
      <CategoryButton name="Gaming"/>
      <CategoryButton name="Live"/>
      <CategoryButton name="Trailer"/>
      <CategoryButton name="Data Structure"/>
    </div>
  );
};

export default ButtonList;
