import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addData } from "../../actions/addData";
import { editData } from "../../actions/editData";

import { Input } from "../form/Input";
import { Button } from "../shared/Button";

export const AddProduct = ({
  productName,
  productPrice,
  productImage,
  productRecipeID,
  productIsActive,
  productID,
  setProductID,
  setProductName,
  setProductPrice,
  setProductImage,
  setProductRecipeID,
  setProductIsActive,
  productIsInEditMode,
  setProductIsInEditMode,
}) => {
  const queryClient = useQueryClient();

  const addProduct = useMutation({
    mutationFn: (data) =>
      addData(`${import.meta.env.VITE_BASE_URL}/products`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products", data.id], data);
      queryClient.invalidateQueries(["products"], { exact: true });
    },
  });

  const editProduct = useMutation({
    mutationFn: (data) =>
      editData(`${import.meta.env.VITE_BASE_URL}/products/${productID}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products", productID], data);
      queryClient.invalidateQueries(["products"], { exact: true });
    },
  });

  const [missingInputs, setMissingInputs] = useState(false);

  const saveProductItem = async (action) => {
    if (!productName || !productPrice || !productImage || !productRecipeID) {
      setMissingInputs(true);

      setTimeout(() => {
        setMissingInputs(false);
      }, 3000);
    } else {
      action.mutate({
        name: productName,
        price: productPrice,
        image: productImage,
        recipe_id: productRecipeID,
        active: productIsActive,
        id: productID,
      });
      resetInputs();
    }
  };

  const resetInputs = () => {
    setProductIsInEditMode(false);
    setProductName("");
    setProductPrice("");
    setProductImage("");
    setProductRecipeID("");
    setProductIsActive(true);
  };

  return (
    <div className="table__add-item table__add-item--products">
      <p className="table__title">Add new product:</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="table__wrapper"
      >
        <Input readonly value={productID} classes="table__add-input" />
        <Input
          value={productName}
          setValue={setProductName}
          placeholder="Name...*"
          classes="table__add-input"
        />
        <Input
          value={productPrice}
          setValue={setProductPrice}
          placeholder="Price...*"
          classes="table__add-input"
        />
        <Input
          value={productImage}
          setValue={setProductImage}
          placeholder="Image URL...*"
          classes="table__add-input"
        />
        <Input
          value={productRecipeID}
          setValue={setProductRecipeID}
          placeholder="Recipe ID...*"
          classes="table__add-input"
        />
        <select
          className="input__select table__add-select"
          value={productIsActive}
          onChange={(e) => {
            setProductIsActive(JSON.parse(e.target.value));
          }}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
        {productIsInEditMode ? (
          <>
            <Button
              type="submit"
              action={() => {
                saveProductItem(editProduct);
              }}
              classes="button__save"
              content={
                <img
                  src="../../../src/assets/icons/crud/save.png"
                  className="table__icon"
                  alt="save"
                />
              }
            />
            <Button
              action={() => resetInputs()}
              classes="button__cancel"
              content={
                <img
                  src="../../../src/assets/icons/crud/cancel.png"
                  className="table__icon"
                  alt="cancel"
                />
              }
            />
          </>
        ) : (
          <Button
            type="submit"
            action={() => saveProductItem(addProduct)}
            classes="button__add"
            content={
              <img
                src="../../../src/assets/icons/crud/add.png"
                className="table__icon"
                alt="add"
              />
            }
          />
        )}
      </form>
      {missingInputs ? (
        <p className="table__add-message">*All inputs are required.</p>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.string,
  productImage: PropTypes.string,
  productRecipeID: PropTypes.string,
  productIsActive: PropTypes.bool,
  setProductName: PropTypes.func,
  setProductPrice: PropTypes.func,
  setProductImage: PropTypes.func,
  setProductRecipeID: PropTypes.func,
  setProductIsActive: PropTypes.func,
  productIsInEditMode: PropTypes.bool,
  setProductIsInEditMode: PropTypes.func,
  productID: PropTypes.number,
  setProductID: PropTypes.func,
};
