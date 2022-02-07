const Meal = (props) => {
  return (
    <div className="card">
      <div className="card-left-content">
        <p className="title">{props.meal.title}</p>
        <p className="card-description">{props.meal.description}</p>
        <div className="price-pop">
          <span className="price">
            {props.meal.price.toString().replace(".", ",")} €
          </span>
          {props.meal.popular ? (
            <i className="fas fa-star popular"> Populaire</i>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="card-img-container">
        {props.meal.picture ? (
          <img className="card-img" src={props.meal.picture} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Meal;
