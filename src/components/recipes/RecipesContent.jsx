import { useState, useEffect } from "react";

import { fetchData } from "../../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../table/Table";
import { Error } from "../shared/Error";
import { Loader } from "../shared/loader";
import { AddRecipe } from "./AddRecipe";

export const RecipesContent = () => {
  const [recipeIsInEditMode, setRecipeIsInEditMode] = useState(false);

  const [recipeID, setRecipeID] = useState(0);
  const [recipeRawMaterial, setRecipeRawMaterial] = useState("");
  const [recipeRawMaterialID, setRecipeRawMaterialID] = useState("");
  const [recipeRawMaterialQuantity, setRecipeRawMaterialQuantity] =
    useState("");
  const [recipeRawMaterialUnit, setRecipeRawMaterialUnit] = useState("");
  const [recipeIsActive, setRecipeIsActive] = useState(true);

  const { data, isLoading, isError } = useQuery(["recipes"], () =>
    fetchData(`${import.meta.env.VITE_BASE_URL}/recipes`)
  );

  useEffect(() => {
    if (!recipeIsInEditMode && data) setRecipeID(data.length + 1);
  }, [recipeIsInEditMode, data]);

  return (
    <div className="dashboard__content--recipes">
      {isLoading ? (
        <Loader classes="error__large" />
      ) : isError ? (
        <Error />
      ) : (
        <>
          {
            <AddRecipe
              recipeID={recipeID}
              recipeRawMaterial={recipeRawMaterial}
              recipeRawMaterialID={recipeRawMaterialID}
              recipeRawMaterialQuantity={recipeRawMaterialQuantity}
              recipeRawMaterialUnit={recipeRawMaterialUnit}
              recipeIsActive={recipeIsActive}
              recipeIsInEditMode={recipeIsInEditMode}
              setRecipeRawMaterial={setRecipeRawMaterial}
              setRecipeRawMaterialID={setRecipeRawMaterialID}
              setRecipeRawMaterialQuantity={setRecipeRawMaterialQuantity}
              setRecipeRawMaterialUnit={setRecipeRawMaterialUnit}
              setRecipeIsActive={setRecipeIsActive}
              setRecipeIsInEditMode={setRecipeIsInEditMode}
            />
          }
          <Table
            content="recipes"
            setRecipeRawMaterial={setRecipeRawMaterial}
            setRecipeRawMaterialID={setRecipeRawMaterialID}
            setRecipeRawMaterialQuantity={setRecipeRawMaterialQuantity}
            setRecipeRawMaterialUnit={setRecipeRawMaterialUnit}
            setRecipeIsActive={setRecipeIsActive}
            setRecipeID={setRecipeID}
            setRecipeIsInEditMode={setRecipeIsInEditMode}
            classes="table table--products"
            data={data?.sort((a, b) =>
              a.raw_material
                .toLowerCase()
                .localeCompare(b.raw_material.toLowerCase())
            )}
          />
        </>
      )}
    </div>
  );
};
