import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-yellow-200 rounded-lg">
      <div className="rounded">
        <img
          className="res-image rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="me-food"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>

        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};


export const withPromotedlabel = (RestaurantCard)=>{
  return (props) => {
    return(
      <div>
        <label>
          Promoted
        </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
