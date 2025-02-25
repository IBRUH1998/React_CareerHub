import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import Appliedjobss from './assets/Components/Appliedjobs/Appliedjobss';
import ErrorPage from './assets/Components/ErrorElements/ErrorPage';
import JobDetails from './assets/Components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/applied",
        element:<Appliedjobss></Appliedjobss> ,
        loader : () => fetch('/jobs.json') ,
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails> ,
        loader : () => fetch('../jobs.json') 
      }
     
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
