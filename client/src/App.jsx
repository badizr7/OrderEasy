import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

// Creamos el enrutador
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" /> // Redirige a "/login"
  },
  {
    path: '/login',
    element: <div><Login/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
