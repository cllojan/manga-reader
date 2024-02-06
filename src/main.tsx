import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Manga from "./Manga";
import './index.css'
import { RouterProvider, createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>
  },
  {
    path:"/library/:code/:name",
    element:<Manga/>
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>      
  </React.StrictMode>,
)
