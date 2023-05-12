import { useNavigate, useOutlet, useLocation, Link } from "react-router-dom";

import { useAuth } from "../hooks/auth/useAuth";

import { Button } from "../components/shared/Button";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) {
    navigate("/dashboard/recipes", { replace: true });
  }

  return (
    <div className="dashboard">
      <nav className="navigation">
        <div className="navigation__links">
          <Link
            className={`navigation__link ${
              location.pathname == "/dashboard/recipes"
                ? "navigation__link--active"
                : ""
            }`}
            to="/dashboard/recipes"
          >
            Recipes
          </Link>
          <Link
            className={`navigation__link ${
              location.pathname == "/dashboard/products"
                ? "navigation__link--active"
                : ""
            }`}
            to="/dashboard/products"
          >
            Products
          </Link>
        </div>
        <Button
          classes="button button__logout"
          label="Logout"
          action={() => logout()}
        />
      </nav>
      {outlet}
    </div>
  );
};
