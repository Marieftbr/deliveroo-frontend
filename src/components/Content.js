import axios from "axios";
import { useState, useEffect } from "react";
import Meal from "./Meal";

const Content = () => {
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

  //   data.map((item, index) => {
  //     console.log(<li key={index}>{data.item.categories.name}</li>);
  //   });

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      {data.categories.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            {item.meals.map((meal, mealIndex) => (
              <Meal meal={meal} key={mealIndex} />
            ))}
          </div>
        );

        //   <p>{data.categories.meals.price}</p>
        //   {data.categories.meals.popular ? <i class="fas fa-star"></i> : ""}
      })}
    </div>
  );
};
export default Content;
