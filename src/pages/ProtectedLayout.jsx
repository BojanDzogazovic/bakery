import { useNavigate, useOutlet, Link } from "react-router-dom";

import { useAuth } from "../hooks/auth/useAuth";

import { Button } from "../components/shared/Button";

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();

  if (!user) {
    navigate("/dashboard/recipes", { replace: true });
  }

  return (
    <div>
      <nav>
        <Link to="/dashboard/recipes">Recipes</Link>
        <Link to="/dashboard/products">Products</Link>
        <Button label="Logout" action={() => logout()} />
      </nav>
      {outlet}
    </div>
  );
};
