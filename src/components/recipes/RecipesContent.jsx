import { useState, useEffect } from "react";

import { fetchData } from "../../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../table/Table";
import { Error } from "../shared/Error";
import { Loader } from "../shared/loader";
//import { AddProduct } from "./AddProduct";

export const RecipesContent = () => {
  const [recipeIsInEditMode, setRecipeIsInEditMode] = useState(false);

  const [recipeID, setRecipeID] = useState(0);
  const [recipeRawMaterial, setRecipeRawMaterial] = useState("");
  const [recipeRawMaterialID, setRecipeRawMaterialID] = useState(0);
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
          {/*  <AddProduct
            recipeName={recipeName}
            recipePrice={recipePrice}
            recipeImage={recipeImage}
            recipeRecipeID={recipeRecipeID}
            recipeIsActive={recipeIsActive}
            setProductName={setProductName}
            setProductPrice={setProductPrice}
            setProductImage={setProductImage}
            setProductRecipeID={setProductRecipeID}
            setProductIsActive={setProductIsActive}
            recipeIsInEditMode={recipeIsInEditMode}
            setProductIsInEditMode={setProductIsInEditMode}
            recipeID={recipeID}
            setProductID={setProductID}
          /> */}
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
