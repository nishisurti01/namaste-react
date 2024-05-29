import RestaurantCard, {withPromotedlabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { MAIN_API } from "../Utils/constants";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    console.log(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const Restaurantwithpromoted = withPromotedlabel(RestaurantCard);
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) return <h1>Please check internet connection</h1>;
  //Shimmer Component conditional randering

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" rounded-md border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-yellow-300 rounded-md"
            onClick={() => {
            
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
            
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      <div className="m-4 p-4 flex text-center">
          <button
            className="px-2 py-2 bg-yellow-300 rounded-sm"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
      </div>
      </div>

      <div className="flex flex-wrap">
        {
          //map fn will take call back fn
          //key should be on parent JSX
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? <withPromotedlabel resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
             
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
