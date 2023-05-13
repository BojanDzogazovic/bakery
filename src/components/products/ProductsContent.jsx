import { fetchData } from "../../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../table/Table";
import { Error } from "../shared/Error";
import { Loader } from "../shared/loader";
import { AddProduct } from "./AddProduct";

export const ProductsContent = () => {
  const { data, isLoading, isError } = useQuery(["products"], () =>
    fetchData(`${import.meta.env.VITE_BASE_URL}/products`)
  );

  return (
    <div className="dashboard__content--products">
      {isLoading ? (
        <Loader classes="error__large" />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <AddProduct nextID={data.length + 1} />
          <Table
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
