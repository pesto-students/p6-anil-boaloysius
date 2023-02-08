import { NavLink } from "react-router-dom";
import "../css/nav.scss";

const navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo">
        Shortly
      </NavLink>
      <div className="navItems">
        <span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Contact
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default navbar;
