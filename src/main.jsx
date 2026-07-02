import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Roots from './Components/Roots/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {index: true, Component: Home},
      {path: "mobile", Component: Mobile}
    ]
  },
  {
    path: "/home",
    element: <div>it is all about home page</div>
  },
  {
    path: "/app",
    Component: App 
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
