import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
function App() {
  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
