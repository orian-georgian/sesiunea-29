import "./Header.css";

function Header({ colorCode }) {
  const headerStyles = {
    backgroundColor: colorCode,
  };

  return (
    <header className="header" style={headerStyles}>
      <img
        className="logo"
        src="https://www.clipartmax.com/png/full/198-1989161_sports-car-logo-car-logo-orange-png.png"
        alt="Car logo"
      />
      <h1 className="title">Rent-a-Car</h1>
    </header>
  );
}

export default Header;
