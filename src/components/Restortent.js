import { useEffect, useState } from "react";
import { IMG_CDN_URL, RESTORENT } from "../constants";
import { useParams } from "react-router-dom";

const Restorent = () => {
  const { restorentId } = useParams();
  const [restorent, setRestorent] = useState([]);

  useEffect(() => {
    getRestorentDetails();
  }, []);
  const getRestorentDetails = async () => {
    const data = await fetch(RESTORENT + `&restaurantId=${restorentId}`);
    const jsonData = await data.json();
    setRestorent(jsonData.data);
    console.log(jsonData.data?.cards?.[0]?.card);
  };

  return (
    <div className="restorent_details_container">
     
        <div className="restorent_details_left">
          <img
            src={
              IMG_CDN_URL +
              restorent?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
        <div className="restorent_details_right">
          <h1>{restorent?.cards?.[0]?.card?.card?.info?.name}</h1>
          <h3>{restorent?.cards?.[0]?.card?.card?.info?.city}</h3>
          <p>{restorent?.cards?.[0]?.card?.card?.info?.avgRating}</p>
        </div>
     

    </div>
  );
};

export default Restorent;
