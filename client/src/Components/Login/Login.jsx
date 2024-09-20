import React, { useState } from 'react';
import './Login.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importar archivos
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

// Importar iconos
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const onSubmit = () => {
    
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Email:', loginEmail);
    console.log('Password:', loginPassword);
    // Ejemplo de llamada a una API
    Axios.post('https://tu-api.com/login', { email: loginEmail, password: loginPassword })
      .then(response => {
        // Manejar la respuesta de la API
        setLoginStatus('Inicio de sesión exitoso');
        navigate('/home'); // Redirigir a otra página después del inicio de sesión
      })
      .catch(error => {
        // Manejar errores
        setLoginStatus('Error en el inicio de sesión');
      });
  };

  return (
    <div className='loginPage flex'>
      <div className="contanier flex ">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h4 className='Tittle'>¡Descubre la forma más cómoda y segura de comprar productos tecnológicos con nuestra página web!</h4>
            <p></p>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headDiv">
            <img src={logo} alt="Logo" />
            <h3>Bienvenido!</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            <span className={loginStatus ? 'statusHolder' : ''}> {loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input
                  type="email"
                  id='email'
                  placeholder='Ingrese su correo'
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input
                  type="password"
                  id='password'
                  placeholder='Ingrese su contraseña'
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button type='submit' className='btn flex'>
             <span>Iniciar sesión </span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <div>
              <link rel="stylesheet" href="" />
            </div>

            <span className='forgotPassword'>
              ¿Olvidaste tu contraseña? <a className='forgotpassword' href="">Click Aquí</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
