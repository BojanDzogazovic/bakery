import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";

import { Login } from "./pages/Login";
import { Recipes } from "./pages/Recipes";
import { Products } from "./pages/Products";
import { ProtectedLayout } from "./pages/ProtectedLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="/dashboard/recipes" element={<Recipes />} />
        <Route path="/dashboard/products" element={<Products />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
