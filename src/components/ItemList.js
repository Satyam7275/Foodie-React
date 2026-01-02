const ItemList = ({ items}) => {

  return (
    <div className="w-full md:w-10/12">
      {items.map((item) => {
        const info = item?.card?.info;
        if (!info) return null;

        return (
          <div
            key={info.id}
            className="p-4 m-2 border-b border-gray-200 text-left"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium">{info.name}</span>
                <p className="text-xs text-gray-500 mt-1">
                  {info.description}
                </p>
              </div>

              <span className="font-semibold">
                ₹{(info.price || info.defaultPrice) / 100}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
