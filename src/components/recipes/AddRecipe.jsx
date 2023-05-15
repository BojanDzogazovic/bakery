import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addData } from "../../actions/addData";
import { editData } from "../../actions/editData";

import { Input } from "../form/Input";
import { Button } from "../shared/Button";

export const AddRecipe = ({
  recipeID,
  recipeRawMaterial,
  recipeRawMaterialID,
  recipeRawMaterialQuantity,
  recipeRawMaterialUnit,
  recipeIsActive,
  recipeIsInEditMode,
  setRecipeRawMaterial,
  setRecipeRawMaterialID,
  setRecipeRawMaterialQuantity,
  setRecipeRawMaterialUnit,
  setRecipeIsActive,
  setRecipeIsInEditMode,
}) => {
  const queryClient = useQueryClient();

  const addRecipe = useMutation({
    mutationFn: (data) =>
      addData(`${import.meta.env.VITE_BASE_URL}/recipes`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["recipes", data.id], data);
      queryClient.invalidateQueries(["recipes"], { exact: true });
    },
  });

  const editRecipe = useMutation({
    mutationFn: (data) =>
      editData(`${import.meta.env.VITE_BASE_URL}/recipes/${recipeID}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["recipes", recipeID], data);
      queryClient.invalidateQueries(["recipes"], { exact: true });
    },
  });

  const [missingInputs, setMissingInputs] = useState(false);

  const saveRecipeItem = async (action) => {
    if (
      !recipeRawMaterial ||
      !recipeRawMaterialID ||
      !recipeRawMaterialQuantity ||
      !recipeRawMaterialUnit
    ) {
      setMissingInputs(true);

      setTimeout(() => {
        setMissingInputs(false);
      }, 3000);
    } else {
      action.mutate({
        raw_material_id: recipeRawMaterialID,
        raw_material: recipeRawMaterial,
        quantity: recipeRawMaterialQuantity,
        unit: recipeRawMaterialUnit,
        active: recipeIsActive,
        id: recipeID,
      });
      resetInputs();
    }
  };

  const resetInputs = () => {
    setRecipeIsInEditMode(false);
    setRecipeRawMaterial("");
    setRecipeRawMaterialID("");
    setRecipeRawMaterialQuantity("");
    setRecipeRawMaterialUnit("");
    setRecipeIsActive(true);
  };

  return (
    <div className="table__add-item table__add-item--recipes">
      <p className="table__title">Add new recipe:</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="table__wrapper"
      >
        <Input readonly value={recipeID} classes="table__add-input" />
        <Input
          value={recipeRawMaterialID}
          setValue={setRecipeRawMaterialID}
          placeholder="Raw material ID...*"
          classes="table__add-input"
        />
        <Input
          value={recipeRawMaterial}
          setValue={setRecipeRawMaterial}
          placeholder="Raw material...*"
          classes="table__add-input"
        />
        <Input
          value={recipeRawMaterialQuantity}
          setValue={setRecipeRawMaterialQuantity}
          placeholder="Quantity...*"
          classes="table__add-input"
        />
        <select
          className="input__select table__add-select"
          value={recipeRawMaterialUnit}
          onChange={(e) => {
            setRecipeRawMaterialUnit(e.target.value);
          }}
        >
          <option value="Miligram">Miligram</option>
          <option value="Gram">Gram</option>
          <option value="Kilogram">Kilogram</option>
          <option value="Mililiter">Mililiter</option>
          <option value="Deciliter">Deciliter</option>
          <option value="Liter">Liter</option>
        </select>
        {recipeIsInEditMode ? (
          <>
            <Button
              type="submit"
              action={() => {
                saveRecipeItem(editRecipe);
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
            action={() => saveRecipeItem(addRecipe)}
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
  recipeID: PropTypes.number,
  recipeRawMaterial: PropTypes.string,
  recipeRawMaterialID: PropTypes.string,
  recipeRawMaterialQuantity: PropTypes.string,
  recipeRawMaterialUnit: PropTypes.string,
  recipeIsActive: PropTypes.bool,
  recipeIsInEditMode: PropTypes.bool,
  setRecipeID: PropTypes.func,
  setRecipeRawMaterial: PropTypes.func,
  setRecipeRawMaterialID: PropTypes.func,
  setRecipeRawMaterialQuantity: PropTypes.func,
  setRecipeRawMaterialUnit: PropTypes.func,
  setRecipeIsActive: PropTypes.func,
  setRecipeIsInEditMode: PropTypes.func,
};
