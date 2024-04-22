import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="me-food"
        />
        <h3>{name}</h3>

        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
