import "./Main.css";

import Card from "./Card/Card";
import { useState } from "react";

const mainStyles = {
  // backgroundColor: "red",
  // padding: "100px",
};

const carsList = [
  {
    id: 1,
    imageUrl: "https://www.freeiconspng.com/uploads/red-sports-car-png-1.png",
    title: "Audi",
    price: 45.99,
  },
  {
    id: 2,
    imageUrl: "https://pngimg.com/d/porsche_PNG10622.png",
    title: "Porsche",
    price: 123.66,
  },
  {
    id: 3,
    imageUrl:
      "https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png",
    title: "Mercedes",
    price: 88.45,
  },
  {
    id: 4,
    imageUrl: "https://freepngimg.com/thumb/car/1-2-car-png-picture.png",
    title: "BMW",
    price: 23.66,
  },
  {
    id: 5,
    imageUrl: "https://www.freeiconspng.com/uploads/red-sports-car-png-1.png",
    title: "Audi",
    price: 125.5,
  },
  {
    id: 6,
    imageUrl: "https://pngimg.com/d/porsche_PNG10622.png",
    title: "Porsche",
    price: 123.66,
  },
  {
    id: 7,
    imageUrl:
      "https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png",
    title: "Mercedes",
    price: 88.45,
  },
  {
    id: 8,
    imageUrl: "https://freepngimg.com/thumb/car/1-2-car-png-picture.png",
    title: "BMW",
    price: 23.66,
  },
  {
    id: 9,
    imageUrl: "https://www.freeiconspng.com/uploads/red-sports-car-png-1.png",
    title: "Audi",
    price: 88.98,
  },
  {
    id: 10,
    imageUrl: "https://pngimg.com/d/porsche_PNG10622.png",
    title: "Porsche",
    price: 123.66,
  },
  {
    id: 11,
    imageUrl:
      "https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png",
    title: "Mercedes",
    price: 88.45,
  },
  {
    id: 12,
    imageUrl: "https://freepngimg.com/thumb/car/1-2-car-png-picture.png",
    title: "BMW",
    price: 23.66,
  },
];

function Main({ onAddToCart }) {
  const [cars, setCars] = useState(carsList);

  function deleteCar(carId) {
    const carsWithoutDeletedOne = cars.filter((car) => car.id !== carId);
    setCars(carsWithoutDeletedOne);
  }

  return (
    <main className="main" style={mainStyles}>
      {cars.map(({ imageUrl, title, price, id }) => (
        <Card
          key={id}
          imageUrl={imageUrl}
          title={title}
          price={price}
          id={id}
          onAddToCart={onAddToCart}
          onDelete={deleteCar}
        />
      ))}
    </main>
  );
}

export default Main;
