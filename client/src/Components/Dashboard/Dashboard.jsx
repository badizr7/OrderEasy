import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar Section/sidebar'
import Inventario from './Components/Sections/Inventario Sections/inventario'
import Balance from './Components/Sections/Balance sections/balance'
import Estadisticas from './Components/Sections/Estadisticas Sections/estadisticas'

const Dashboard = () => {
  return (
    <div className='container'>
      {/* El Sidebar siempre estará presente */}
      <Sidebar />
      
      {/* La sección donde se mostrará el contenido según la ruta */}
      <div className="content">
        <Routes>
          {/* Define las rutas de cada sección */}
          <Route path="inventario" element={<Inventario />} />
          <Route path="balance" element={<Balance />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          {/* Puedes añadir más rutas aquí */}
        </Routes>
      </div>    
    </div>
  )
}

export default Dashboard;
