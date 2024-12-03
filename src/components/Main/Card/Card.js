import { useState } from "react";

function getBorderByTitle(title) {
  let className = "";

  switch (title) {
    case "Audi": {
      className = "border-red";
      break;
    }
    case "Mercedes": {
      className = "border-blue";
      break;
    }
    case "Porsche": {
      className = "border-orange";
      break;
    }
    case "BMW": {
      className = "border-green";
      break;
    }
    default:
      className = "border-gray";
  }

  return className;
}

function Card({ imageUrl, title, price, id, onDelete, onAddToCart }) {
  const [counter, setCounter] = useState(0);
  const borderClass = getBorderByTitle(title);

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleDelete(event) {
    event.stopPropagation();

    if (onDelete) {
      onDelete(id);
    }
  }

  function handleAddToCart(event) {
    event.stopPropagation();

    if (onAddToCart) {
      onAddToCart({
        id,
        price,
        imageUrl,
        title,
      });
    }
  }

  /*  if (title !== "Audi") {
    return null;
  } */

  return (
    <div className={`card ${borderClass}`} onClick={handleClick}>
      <img className="car-img" src={imageUrl} alt={title} />
      <h4>{title}</h4>
      {price > 100 ? (
        <h4 className="text-danger">Too expensive!</h4>
      ) : (
        <h3>{price}/d</h3>
      )}
      {counter <= 3 && <h4>{counter}</h4>}
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Card;
