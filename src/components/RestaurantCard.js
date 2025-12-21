import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla,deliveryTime}=resData?.info;
    return ( 
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-emerald-300"> 
            <img className="rounded-lg"
            alt="res-logo"
            src={CDN_URL + 
              cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime}mins</h4>
        </div>

    );
};
// Higher Order Component

//input - RestaurantCard==>>restaurantcardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return ()=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );

  };
};
 
export default RestaurantCard;