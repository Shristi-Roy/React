import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // local state variable = super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList.restaurants);
  const [originalList] = useState(resList.restaurants); 

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = originalList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList); 
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
