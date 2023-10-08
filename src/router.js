import "./assets/global.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MapBox } from "./pages/map/mapbox";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapBox />} />
    </Routes>
  );
};
