import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import Login from './Components/Auth/Login.jsx';
import Body from './Components/Body/Body.jsx';
import SignUp from './Components/Auth/Signup.jsx';
import Store from './Store/Store.js';
import {Provider} from 'react-redux'
 
// Create routes using createBrowserRouter directly
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App />}>
       <Route path='' element={<Body/>} />
       <Route path='login' element={<Login />} />
       <Route path='signup' element={<SignUp/>} />
    </Route>,
  )
);



// Render the application
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </Provider>
);