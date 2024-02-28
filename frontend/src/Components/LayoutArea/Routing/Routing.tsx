import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Page404 from "../page404/page404";
import "./Routing.css";
import News from "../../NewsArea/News";
import WeatherArea from "../../WeatherArea/Weather/WeatherArea";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        {/* Home: */}
        <Route path="/clock" element={<Home />} />

        <Route path="/israel" element={<News />} />

        <Route path="/weather" element={<WeatherArea />} />
        
        {/* Default Route: */}
        <Route path="/" element={<Navigate to="/clock" />} />

        {/* Page not found route: */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
