import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    // ✅ Whole card is clickable
    <Link to={`/restaurant/${id}`} className="block">
      <div className="m-4 p-4 w-[250px] h-auto rounded-lg bg-gray-100 hover:bg-emerald-300 cursor-pointer">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />

        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;

//
// ✅ Higher Order Component (highlight promoted restaurants)
//
export const withPromotedLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 rounded">
          Promoted
        </label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
