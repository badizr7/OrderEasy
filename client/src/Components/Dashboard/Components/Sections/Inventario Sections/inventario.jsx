import React from 'react';
import './inventario.scss'; // Asegúrate de que el archivo SCSS está en la ruta correcta

const Inventario = () => {
  console.log('Inventario Component Rendered'); // Para verificar que el componente se ha renderizado

  return (
    <div className="inventario-container">
      {/* Contenido del inventario */}
      <div className="content">
        <div className="textDiv">
          <h4 className='Tittle'>¡Descubre la forma más cómoda y segura de comprar productos tecnológicos con nuestra página web!</h4>
        </div>

        <div className="productList">
          <h3 className="sectionTitle">Lista de Productos</h3>
          <ul className="products">
            <li>Producto 1: Laptop Gaming</li>
            <li>Producto 2: Smartphone 5G</li>
            <li>Producto 3: Auriculares Bluetooth</li>
            <li>Producto 4: Monitor 4K</li>
          </ul>
          <button className="actionButton">Ver más productos</button>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
