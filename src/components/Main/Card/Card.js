import { useState } from "react";

function Card({ imageUrl, title, price }) {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="car-img" src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <h3>{price}/d</h3>
      <h4>{counter}</h4>
    </div>
  );
}

export default Card;
