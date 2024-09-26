import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

// Importar Iconos y Logo
import logo from "../../../../LoginAssets/logo.png";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <NavLink to="/dashboard">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Menu Principal</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "menuLink flex active" : "menuLink flex"
              }
            >
              <IoMdSpeedometer className="icon" />
              <h3 className="smallText">Dashboard</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/dashboard/balance"
              className={({ isActive }) =>
                isActive ? "menuLink flex active" : "menuLink flex"
              }
            >
              <BsTrophy className="icon" />
              <h3 className="smallText">Balance</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/dashboard/inventario"
              className={({ isActive }) =>
                isActive ? "menuLink flex active" : "menuLink flex"
              }
            >
              <MdOutlineExplore className="icon" />
              <h3 className="smallText">Inventario</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/dashboard/estadisticas"
              className={({ isActive }) =>
                isActive ? "menuLink flex active" : "menuLink flex"
              }
            >
              <MdDeliveryDining className="icon" />
              <h3 className="smallText">Estadísticas</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "menuLink flex active" : "menuLink flex"
              }
            >
              <MdDeliveryDining className="icon" />
              <h3 className="smallText">Salir</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
