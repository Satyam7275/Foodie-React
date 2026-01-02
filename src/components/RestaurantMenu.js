import { useEffect, useState } from "react";
import mockMenu from "../utils/mockMenu";
import { useParams } from "react-router-dom";
 
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();



  useEffect(() => {
    fetchData();
  }, [resId]);


  const fetchData = async () => {
    try {
    const MENU_API =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467&lng=80.9462&restaurantId=${resId}`
  );


      const data = await fetch(MENU_API);

      if (!data.ok) {
        setMenuData(mockMenu);
        return;
      }

      const json = await data.json();
      setMenuData(json);
    } catch (err) {
      setMenuData(mockMenu);
    }
  };

  if (!menuData) return <h2>Loading menu...</h2>;

  // ✅ Restaurant Info
  const restaurantInfo =
    menuData?.data?.cards?.[0]?.card?.card?.info;

  // ✅ Find groupedCard safely
  const groupedCard = menuData?.data?.cards?.find(
    (c) => c.groupedCard
  )?.groupedCard;

  // ✅ Extract categories safely
  const categories =
    groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {restaurantInfo?.name}
      </h1>
      <p className="font-bold text-lg">
        {restaurantInfo?.costForTwoMessage}
      </p>

      {/* ✅ Render categories */}
      {categories?.map((category) => (
        <RestaurantCategories
          key={category.card.card.title}
          data={category.card.card}
        
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
