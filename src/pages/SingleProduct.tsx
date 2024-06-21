import { LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = ({ params }) => {
  console.log("paramsparams", params);
  return null;
};

function SingleProduct() {
  return <h1 className="text-4xl">SingleProduct Page</h1>;
}
export default SingleProduct;
