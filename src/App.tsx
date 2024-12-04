import store from "./Kanbas/store";
import { Provider } from "react-redux";
import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  console.log(process.env);
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <h1>App</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
