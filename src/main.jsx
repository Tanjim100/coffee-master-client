import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch('http://localhost:6010/coffee'),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:6010/coffee/${params.id}`),
      },
      {
        path: "/viewCoffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) => fetch(`http://localhost:6010/coffee/${params.id}`),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('http://localhost:6010/users'),
      },
    ]
  },





  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
