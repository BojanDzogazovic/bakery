import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";
import { Recipes } from "./pages/Recipes";
import { Products } from "./pages/Products";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/recipes" element={<Recipes />} />
        <Route path="/dashboard/products" element={<Products />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
