import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import {
  type ProductsResponseWithParams,
  customFetch,
  type ProductsResponse,
} from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  console.log("request", request);
  //new URL(request.url) creates a new URL object from the URL in the request.
  // .searchParams.entries() gets an iterator for entries in the query parameters, where each entry is an array of [key, value].

  // ... is the spread operator, which expands the entries into individual elements.
  // Object.fromEntries([...]) converts these entries back into an object, where each key-value pair becomes a property in the object.

  // So, if your URL is http://example.com?param1=value1&param2=value2, the resulting params object would be { param1: 'value1', param2: 'value2' }.
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // const sff = Object.fromEntries(new URL(request.url).searchParams.entries());
  // console.log("sff", sff);
  console.log("params", params);
  const response = await customFetch<ProductsResponse>(url, { params });
  console.log(response.data);

  return { ...response.data, params };
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
