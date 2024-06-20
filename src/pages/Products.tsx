import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import { customFetch, type ProductsResponse } from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch.get<ProductsResponse>(url);
  console.log("response", response);
  return { ...response.data };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
