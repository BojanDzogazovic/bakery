import { useState, useEffect } from "react";

import { fetchData } from "../../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../table/Table";
import { Error } from "../shared/Error";
import { Loader } from "../shared/loader";
import { AddProduct } from "./AddProduct";

export const ProductsContent = () => {
  const [productIsInEditMode, setProductIsInEditMode] = useState(false);

  const [productID, setProductID] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productRecipeID, setProductRecipeID] = useState("");
  const [productIsActive, setProductIsActive] = useState(true);

  const { data, isLoading, isError } = useQuery(["products"], () =>
    fetchData(`${import.meta.env.VITE_BASE_URL}/products`)
  );

  useEffect(() => {
    if (!productIsInEditMode && data) setProductID(data.length + 1);
  }, [productIsInEditMode, data]);

  return (
    <div className="dashboard__content--products">
      {isLoading ? (
        <Loader classes="error__large" />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <AddProduct
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productRecipeID={productRecipeID}
            productIsActive={productIsActive}
            setProductName={setProductName}
            setProductPrice={setProductPrice}
            setProductImage={setProductImage}
            setProductRecipeID={setProductRecipeID}
            setProductIsActive={setProductIsActive}
            productIsInEditMode={productIsInEditMode}
            setProductIsInEditMode={setProductIsInEditMode}
            productID={productID}
            setProductID={setProductID}
          />
          <Table
            content="products"
            setProductName={setProductName}
            setProductPrice={setProductPrice}
            setProductImage={setProductImage}
            setProductRecipeID={setProductRecipeID}
            setProductIsActive={setProductIsActive}
            setProductID={setProductID}
            setProductIsInEditMode={setProductIsInEditMode}
            classes="table table--products"
            data={data?.sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )}
          />
        </>
      )}
    </div>
  );
};
