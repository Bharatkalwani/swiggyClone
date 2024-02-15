import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./components/About";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider,Routes,Route} from "react-router-dom"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>APPP</div>,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App></App>
    <RouterProvider   router={appRouter}/>
    // router={router}/>
);



