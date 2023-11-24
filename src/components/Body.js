import { useState } from "react";
import { RestaurantList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [restorentList, setRestorentList] = useState(RestaurantList);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="cards">
      <div className="search-container">
        <div className="search-bar" >
          <input
            type="text"
            name="search"
            placeholder="Search ...."
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <button className="search-button">Search</button>
      </div>
      <div className="restaurent-cards">
        {restorentList.map((restorant) => (
          <RestaurentCard {...restorant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
