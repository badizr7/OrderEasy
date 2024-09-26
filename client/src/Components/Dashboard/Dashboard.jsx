import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/SideBar Section/sidebar";
import BodySection from "./Components/Body Section/body";
import Inventario from "./Components/Sections/Inventario Sections/inventario";
import Balance from "./Components/Sections/Balance sections/balance";
import Estadisticas from "./Components/Sections/Estadisticas Sections/estadisticas";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      {/* Aquí renderizamos las rutas específicas dentro del dashboard */}
      <div className="main-content">
        <Routes>
          {/* Definir rutas relativas a /dashboard */}
          <Route path="/" element={<BodySection />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
