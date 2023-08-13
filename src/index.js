import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SignContextProvider } from "./storage/Sign-Context";


//using the bootstrap

// import '../node_modules/react-bootstrap/dist/react-bootstrap';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <SignContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SignContextProvider>
);

//if you want to start mesuring perfomance in your app and pass a function
