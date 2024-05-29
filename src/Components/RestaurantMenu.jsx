import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  //destructuring data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <h2 className="font-bold text-xl">{cuisines.join(",")}</h2>
      <h2>- {costForTwoMessage}</h2>
      {categories.map((category,index)=> <RestaurantCategories key={category?.card?.card?.tile} data={category?.card?.card} showItems={index===showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>)}
    </div>
  );
};

export default RestaurantMenu;
