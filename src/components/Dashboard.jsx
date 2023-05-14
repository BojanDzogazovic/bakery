import { useState, useMemo } from "react";
import { useNavigate, useOutlet, useLocation, Link } from "react-router-dom";

import { useAuth } from "../hooks/auth/useAuth";

import { ClientStateContext } from "../ClientStateContext";

import { Button } from "./shared/Button";
import { Modal } from "./shared/Modal";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) {
    navigate("/dashboard/recipes", { replace: true });
  }

  const [globalClientState, setGlobalClientState] = useState({
    isModalActive: false,
    deleteItemID: 0,
  });

  const providerValue = useMemo(
    () => ({ globalClientState, setGlobalClientState }),
    [globalClientState, setGlobalClientState]
  );
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
          content="Logout"
          action={() => logout()}
        />
      </nav>
      <ClientStateContext.Provider value={providerValue}>
        {outlet}
        <Modal
          content={
            <>
              <div className="modal__message">
                <img
                  src="../../../src/assets/icons/crud/error.png"
                  className="error__icon"
                  alt="Error"
                />{" "}
                <h2>Are you sure you want to delete this item?</h2>
              </div>
              <div className="modal__actions">
                <Button
                  classes="button modal__confirm"
                  content="Confirm"
                  action={() => {
                    console.log(555);
                    setGlobalClientState((prevState) => ({
                      ...prevState,
                      isModalActive: false,
                      deleteItemID: 0,
                    }));
                  }}
                />
                <Button
                  classes="button modal__cancel"
                  content="Cancel"
                  action={() => {
                    setGlobalClientState((prevState) => ({
                      ...prevState,
                      isModalActive: false,
                      deleteItemID: 0,
                    }));
                  }}
                />
              </div>
            </>
          }
        />
      </ClientStateContext.Provider>
    </div>
  );
};
