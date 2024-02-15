import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import { createBrowserRouter ,RouterProvider,Routes,Route} from "react-router-dom"
import About from "./components/About";
import "./App.css";
import { Route, BrowserRouter as Router, Routes,createBrowserRouter } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
    return (
      <div className="App">
        <Header />
        <Body></Body>
      </div>
    );
  }

  
export default App;
