import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <NavLink to="/clock">Clock</NavLink>
            <NavLink to="/israel">News</NavLink>
            <NavLink to="/weather">Weather</NavLink>

        </div>
    );
}

export default Menu;
