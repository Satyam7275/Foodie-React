import { useEffect, useState } from "react";
import mockMenu from "../utils/mockMenu";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const MENU_API =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467&lng=80.9462&restaurantId=139558"
        );

      const data = await fetch(MENU_API);

      if (!data.ok) {
        console.log("API blocked → loading mock data");
        setMenuData(mockMenu);
        return;
      }

      const json = await data.json();
      setMenuData(json);

    } catch (err) {
      console.log("Fetch failed → loading mock data");
      setMenuData(mockMenu);
    }
  };

  if (!menuData) return <h2>Loading menu...</h2>;

  const restaurantInfo =
    menuData?.data?.cards?.[0]?.card?.card?.info;

  return (
    <div>
      <h1>{restaurantInfo?.name}</h1>
      <p>{restaurantInfo?.costForTwoMessage}</p>
    </div>
  );
};

export default RestaurantMenu;
