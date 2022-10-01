import React from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import "./app.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
