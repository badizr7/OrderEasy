import React from "react";
import { NavLink } from "react-router-dom"; // Cambiar Link a NavLink
import "./sidebar.css";

// Importar Logo
import logo from "../../../../LoginAssets/logo.png";

// Importar Iconos
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <NavLink to={"/"}>
          <img src={logo} alt="Image Name" />
        </NavLink>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Menu Principal</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <NavLink to="/" className="menuLink flex" activeClassName="active">
              {" "}
              {/* Cambiar Link a NavLink */}
              <IoMdSpeedometer className="icon" />
              <h3 className="smallText">Dashboard</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/balance"
              className="menuLink flex"
              activeClassName="active"
            >
              {" "}
              {/* Cambiar Link a NavLink */}
              <BsTrophy className="icon" />
              <h3 className="smallText">Balance</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/inventario"
              className="menuLink flex"
              activeClassName="active"
            >
              {" "}
              {/* Cambiar Link a NavLink */}
              <MdOutlineExplore className="icon" />
              <h3 className="smallText">Inventario</h3>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink
              to="/estadisticas"
              className="menuLink flex"
              activeClassName="active"
            >
              {" "}
              {/* Cambiar Link a NavLink */}
              <MdDeliveryDining className="icon" />
              <h3 className="smallText">Estadisticas</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
