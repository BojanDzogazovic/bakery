import { fetchData } from "../actions/fetchData";
import { useQuery } from "@tanstack/react-query";

import { Table } from "../components/table/Table";
import { Error } from "../components/shared/Error";
import { Loader } from "../components/shared/loader";

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
        <Table classes="table table--products" data={data} />
      )}
    </div>
  );
};
