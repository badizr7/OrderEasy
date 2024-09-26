import React, { useState } from "react";
import "./Login.css";
import "../../App.css";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

// Importar archivos
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// Importar iconos
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!loginEmail || !loginPassword) {
      setLoginStatus("Por favor, completa todos los campos.");
      return false;
    }
    // Valida que el correo tenga un formato adecuado
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      setLoginStatus("Por favor, ingresa un correo válido.");
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    if (!validateForm()) {
      return;
    }

    // Llamada a la API (simulada o real)
    Axios.post("https://tu-api.com/login", {
      email: loginEmail,
      password: loginPassword,
    })
      .then((response) => {
        setLoginStatus("Inicio de sesión exitoso");
        navigate("/dashboard"); // Redirigir al dashboard
      })
      .catch((error) => {
        setLoginStatus(
          "Error en el inicio de sesión, revisa tus credenciales."
        );
      });
  };

  return (
    <div className="loginPage flex">
      <div className="contanier flex ">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h4 className="Tittle">
              ¡Descubre la forma más cómoda y segura de comprar productos
              tecnológicos con nuestra página web!
            </h4>
            <p></p>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headDiv">
            <img src={logo} alt="Logo" />
            <h3>Bienvenido!</h3>
          </div>

          <form className="form grid" onSubmit={onSubmit}>
            <span className={loginStatus ? "statusHolder" : ""}>
              {loginStatus}
            </span>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Ingrese su correo"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Iniciar sesión </span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>

          {/* Enlace adicional que redirige al dashboard */}
            <Link to="/dashboard">
              Dashboard
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
