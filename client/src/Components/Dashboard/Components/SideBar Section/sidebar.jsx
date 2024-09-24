import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

// Importar Logo e Iconos
import logo from '../assets/LoginAssets/logo.png';
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="OrderEasy Logo" />
      </div>
      <nav>
        <h3>Menú Principal</h3>
        <ul>
          <li>
            <NavLink to="/" end>
              <IoMdSpeedometer className="icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/balance">
              <MdDeliveryDining className="icon" />
              Balance
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventario">
              <MdOutlineExplore className="icon" />
              Inventario
            </NavLink>
          </li>
          <li>
            <NavLink to="/estadisticas">
              <BsTrophy className="icon" />
              Estadísticas
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;