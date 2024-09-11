import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

// Crear el enrutador
const router = createBrowserRouter(
  createRoutesFromElements([
    {
      path: '/login',
      element: <div><Login/></div>
    },
    {
      path: '/dashboard',
      element: <div><Dashboard/></div>
    }

  ])
);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
