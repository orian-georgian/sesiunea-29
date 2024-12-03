import "./Sidebar.css";
import MenuItem from "./MenuItem";

const menuItems = [
  { label: "Cars", key: "cars" },
  {
    label: "Contact",
    key: "contact",
  },
  {
    label: "About us",
    key: "about",
  },
];

function Sidebar({ onColorChangeClick }) {
  function handleClick() {
    onColorChangeClick();
  }

  return (
    <aside className="sidebar">
      <nav>
        <ul className="navigation-menu">
          {menuItems.map(({ label, key }) => (
            <MenuItem key={key} label={label} />
          ))}
        </ul>
      </nav>
      <button className="btn btn-primary w-100" onClick={handleClick}>
        Change header color
      </button>
    </aside>
  );
}

export default Sidebar;
