import "./Header.css";

function Header({ colorCode, onOpenShoppingCart }) {
  const headerStyles = {
    backgroundColor: colorCode,
  };

  function handleOpenShopingCart() {
    if (onOpenShoppingCart) {
      onOpenShoppingCart();
    }
  }

  return (
    <header className="header" style={headerStyles}>
      <img
        className="logo"
        src="https://www.clipartmax.com/png/full/198-1989161_sports-car-logo-car-logo-orange-png.png"
        alt="Car logo"
      />
      <h1 className="title">Rent-a-Car</h1>
      <i
        onClick={handleOpenShopingCart}
        className="bi bi-cart3 fs-3 text-light ms-auto clickable"
      ></i>
    </header>
  );
}

export default Header;
