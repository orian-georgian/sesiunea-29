import "./Main.css";

import Card from "./Card/Card";

const mainStyles = {
  // backgroundColor: "red",
  // padding: "100px",
};

function Main() {
  return (
    <main className="main" style={mainStyles}>
      <Card
        imageUrl="https://www.freeiconspng.com/uploads/red-sports-car-png-1.png"
        title="Audi"
        price={45.99}
      />
      <Card
        imageUrl="https://pngimg.com/d/porsche_PNG10622.png"
        title="Porsche"
        price={123.66}
      />
      <Card
        imageUrl="https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png"
        title="Mercedes"
        price={88.45}
      />
      <Card
        imageUrl="https://freepngimg.com/thumb/car/1-2-car-png-picture.png"
        title="BMW"
        price={23.66}
      />
      <Card
        imageUrl="https://www.freeiconspng.com/uploads/red-sports-car-png-1.png"
        title="Audi"
        price={45.99}
      />
      <Card
        imageUrl="https://pngimg.com/d/porsche_PNG10622.png"
        title="Porsche"
        price={123.66}
      />
      <Card
        imageUrl="https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png"
        title="Mercedes"
        price={88.45}
      />
      <Card
        imageUrl="https://freepngimg.com/thumb/car/1-2-car-png-picture.png"
        title="BMW"
        price={23.66}
      />
      <Card
        imageUrl="https://www.freeiconspng.com/uploads/red-sports-car-png-1.png"
        title="Audi"
        price={45.99}
      />
      <Card
        imageUrl="https://pngimg.com/d/porsche_PNG10622.png"
        title="Porsche"
        price={123.66}
      />
      <Card
        imageUrl="https://pics.clipartpng.com/White_Mercedes_Benz_GLK_Car_PNG_Clipart-131.png"
        title="Mercedes"
        price={88.45}
      />
      <Card
        imageUrl="https://freepngimg.com/thumb/car/1-2-car-png-picture.png"
        title="BMW"
        price={23.66}
      />
    </main>
  );
}

export default Main;
