import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data}) => {
  if (!data) return null;

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto cursor-pointer">
        <div
          className="flex justify-between items-center"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
