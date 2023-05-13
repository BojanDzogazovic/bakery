import { Routes, Route, Navigate } from "react-router-dom";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Login } from "./pages/Login";
import { Recipes } from "./pages/Recipes";
import { Products } from "./pages/Products";
import { Dashboard } from "./components/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/recipes" element={<Recipes />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>{" "}
    </QueryClientProvider>
  );
}

export default App;
