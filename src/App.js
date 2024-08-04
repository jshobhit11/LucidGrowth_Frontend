import React from "react";
import AppRouter from "./router/Router";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
