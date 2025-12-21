import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/uesOnlineStatus";


const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    
    const restaurantcardPromoted=withPromotedLabel(RestaurantCard);
useEffect(()=>{
   fetchData();
  },[]);

 const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9291414&lng=80.9427441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  console.log(json);

  // Optional Chaining - dynamic extraction
  const restaurants =
    json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListOfRestaurants(restaurants);
  setFilteredRestaurant(restaurants);

  };

  const OnlineStatus=useOnlineStatus();

  if(OnlineStatus==false)
    return(
  <h1>
    Looks like you're offline!! please check your internet connection
  </h1>);
  //Condtional Rendering 


    return listOfRestaurants.length === 0 ?(
        <Shimmer/>
      ):(
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4 ">
                <input 
                type="text"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value);
                }}
                />
                <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
                onClick={()=>{
                const filteredRestaurant = listOfRestaurants.filter((res) => 
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                  setFilteredRestaurant(filteredRestaurant);
                }}> search
                </button>
              </div>
              <div className="search m-4 p-4  flex items-center ">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
               </div>
            </div>
            <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurant) =>
           restaurant.info.promoted ? (
           <RestaurantCardPromoted resData={restaurant} />
            ) : (
           <RestaurantCard
           key={restaurant.info.id}
           resData={restaurant}
          />
  )
)}

            </div>
        </div>
       
           
        );
};
export default Body;