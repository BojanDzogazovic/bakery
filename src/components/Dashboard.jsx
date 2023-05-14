import { useState, useMemo } from "react";
import { useNavigate, useOutlet, useLocation, Link } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../hooks/auth/useAuth";

import { ClientStateContext } from "../ClientStateContext";

import { editData } from "../actions/editData";

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
    deleteItem: {},
  });

  const providerValue = useMemo(
    () => ({ globalClientState, setGlobalClientState }),
    [globalClientState, setGlobalClientState]
  );

  const queryClient = useQueryClient();

  const deleteProduct = useMutation({
    mutationFn: (data) =>
      editData(`${import.meta.env.VITE_BASE_URL}/products/${data.id}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products", data.id], data);
      queryClient.invalidateQueries(["products"], { exact: true });
    },
  });
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
                  className="error__icon modal__warning-icon"
                  alt="Error"
                />{" "}
                <h2 className="modal__warning-message">
                  Are you sure you want to delete this item?
                </h2>
              </div>
              <div className="modal__actions">
                <Button
                  classes="button modal__confirm"
                  content="Confirm"
                  action={() => {
                    setGlobalClientState((prevState) => ({
                      ...prevState,
                      isModalActive: false,
                      deleteItem: {},
                    }));
                    deleteProduct.mutate({ ...globalClientState.deleteItem });
                  }}
                />
                <Button
                  classes="button modal__cancel"
                  content="Cancel"
                  action={() => {
                    setGlobalClientState((prevState) => ({
                      ...prevState,
                      isModalActive: false,
                      deleteItem: {},
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
