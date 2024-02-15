import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import About from "./components/About";
import Contact from './components/Contact';
import Error from './components/Error';

import Body from './components/Body';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Body></Body>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
    errorElement:<Error></Error>
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider   router={appRouter}/>
);



