import { useState, useEffect } from "react";

import { fetchData } from "../../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../table/Table";
import { Error } from "../shared/Error";
import { Loader } from "../shared/loader";
import { AddProduct } from "./AddProduct";

export const ProductsContent = () => {
  const [editMode, setEditMode] = useState(false);

  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [recipeID, setRecipeID] = useState("");
  const [active, setActive] = useState(true);

  const { data, isLoading, isError } = useQuery(["products"], () =>
    fetchData(`${import.meta.env.VITE_BASE_URL}/products`)
  );

  useEffect(() => {
    if (!editMode && data) setID(data.length + 1);
  }, [editMode, data]);

  return (
    <div className="dashboard__content--products">
      {isLoading ? (
        <Loader classes="error__large" />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <AddProduct
            name={name}
            price={price}
            image={image}
            recipeID={recipeID}
            active={active}
            setName={setName}
            setPrice={setPrice}
            setImage={setImage}
            setRecipeID={setRecipeID}
            setActive={setActive}
            editMode={editMode}
            setEditMode={setEditMode}
            id={id}
            setID={setID}
          />
          <Table
            setName={setName}
            setPrice={setPrice}
            setImage={setImage}
            setRecipeID={setRecipeID}
            setActive={setActive}
            setID={setID}
            setEditMode={setEditMode}
            classes="table table--products"
            data={data.sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )}
          />
        </>
      )}
    </div>
  );
};
