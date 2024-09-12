// src/Components/Dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import Sidebar from './Components/SideBar Section/sidebar'; 
import Inventario from './Components/Sections/Inventario Sections/inventario'// Asegúrate de que la ruta sea correcta

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      
      {/* Más contenido */}
    </div>
  );
}

export default Dashboard; // Asegúrate de tener esta línea
