//Global
import { NavLink } from "react-router-dom";

//Styles
import "./navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="title">
        <p>Navigation</p>
      </div>
      <span>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          className={"link"}
          to={"/"}
        >
          Main
        </NavLink>
        /
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          className={"link"}
          to={"/transfer"}
        >
          Transfer
        </NavLink>
      </span>
    </div>
  );
}

export default Navigation;
