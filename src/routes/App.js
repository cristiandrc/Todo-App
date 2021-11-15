import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TodoContext } from "../Context/TodoContext";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import ChangePassword from "../pages/ChangePassword";
import SingUp from "../pages/SingUp";

function App() {
  const { auth } = useContext(TodoContext);

  return (
    <BrowserRouter>
      <Routes>
        {!auth.isAuth && (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}

        {!auth.isAuth && (
          <Route
            path="/change-password"
            element={<Navigate to="/login" replace />}
          />
        )}

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>

        {auth.isAuth && (
          <Route path="/login" element={<Navigate to="/" replace />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
