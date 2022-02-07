import axios from "axios";
import { useState, useEffect } from "react";

const Bandeau = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect est déclenchée");
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-lereacteur-p.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="white-block">
      <h1 className="resto-title">{data.restaurant.name}</h1>
      <div className="block">
        <p className="description">{data.restaurant.description}</p>
        <img src={data.restaurant.picture} className="bandeau-img" />
      </div>
    </div>
  );
};
export default Bandeau;
