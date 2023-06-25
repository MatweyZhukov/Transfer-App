//Global
import { NavLink } from "react-router-dom";

//Styles
import "./main.css";

function Main() {
  return (
    <div className="main">
      <h1>
        This is a transfer app. Here you can see, how much is RUB to USD and
        EUR. If you wanna see this, look bellow.
      </h1>
      <NavLink className="link" to={"/transfer"}>
        To Transfer App
      </NavLink>
    </div>
  );
}

export default Main;
