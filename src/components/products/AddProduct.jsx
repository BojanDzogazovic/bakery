import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addData } from "../../actions/addData";
import { editData } from "../../actions/editData";

import { Input } from "../form/Input";
import { Button } from "../shared/Button";

export const AddProduct = ({
  name,
  price,
  image,
  recipeID,
  active,
  id,
  setID,
  setName,
  setPrice,
  setImage,
  setRecipeID,
  setActive,
  editMode,
  setEditMode,
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
      editData(`${import.meta.env.VITE_BASE_URL}/products/${id}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products", id], data);
      queryClient.invalidateQueries(["products"], { exact: true });
    },
  });

  const [missingInputs, setMissingInputs] = useState(false);

  const addItem = async () => {
    if (!name || !price || !image || !recipeID) {
      setMissingInputs(true);

      setTimeout(() => {
        setMissingInputs(false);
      }, 3000);
    } else {
      const newProduct = {
        name: name,
        price: price,
        image: image,
        recipe_id: recipeID,
        active: active,
        id: id,
      };
      addProduct.mutate({ ...newProduct });
      resetInputs();
    }
  };

  const saveItem = async () => {
    if (!name || !price || !image || !recipeID) {
      setMissingInputs(true);

      setTimeout(() => {
        setMissingInputs(false);
      }, 3000);
    } else {
      const newProduct = {
        name: name,
        price: price,
        image: image,
        recipe_id: recipeID,
        active: active,
        id: id,
      };
      editProduct.mutate({ ...newProduct });
      resetInputs();
    }
  };

  const resetInputs = () => {
    setEditMode(false);
    setName("");
    setPrice("");
    setImage("");
    setRecipeID("");
    setActive(true);
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
        <Input readonly value={id} classes="table__add-input" />
        <Input
          value={name}
          setValue={setName}
          placeholder="Name...*"
          classes="table__add-input"
        />
        <Input
          value={price}
          setValue={setPrice}
          placeholder="Price...*"
          classes="table__add-input"
        />
        <Input
          value={image}
          setValue={setImage}
          placeholder="Image URL...*"
          classes="table__add-input"
        />
        <Input
          value={recipeID}
          setValue={setRecipeID}
          placeholder="Recipe ID...*"
          classes="table__add-input"
        />
        <select
          className="input__select table__add-select"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
        {editMode ? (
          <>
            <Button
              type="submit"
              action={() => {
                saveItem();
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
            action={() => addItem()}
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
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  recipeID: PropTypes.string,
  active: PropTypes.bool,
  setName: PropTypes.func,
  setPrice: PropTypes.func,
  setImage: PropTypes.func,
  setRecipeID: PropTypes.func,
  setActive: PropTypes.func,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
  id: PropTypes.number,
  setID: PropTypes.func,
};
