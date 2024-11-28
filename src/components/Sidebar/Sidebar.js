import "./Sidebar.css";
import MenuItem from "./MenuItem";
function Sidebar({ onColorChangeClick }) {
  function handleClick() {
    onColorChangeClick();
  }

  return (
    <aside className="sidebar">
      <nav>
        <ul className="navigation-menu">
          <MenuItem label="Cars" />
          <MenuItem label="Contact" />
        </ul>
      </nav>
      <button className="btn btn-primary w-100" onClick={handleClick}>
        Change header color
      </button>
    </aside>
  );
}

export default Sidebar;
