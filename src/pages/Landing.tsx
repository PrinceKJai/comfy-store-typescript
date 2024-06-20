import { Hero, FeaturedProducts } from '@/components';
import { customFetch } from '@/utils/customFetch';
import { ProductsResponse } from '@/utils/types';
import { LoaderFunction, useLoaderData } from 'react-router-dom';

const url = '/products?featured=true';

export const loader: LoaderFunction = async () : Promise<ProductsResponse> => {
  const response = await customFetch.get<ProductsResponse>(url);
  return { ...response.data };
}

function Landing() {
  const data = useLoaderData() as ProductsResponse;
  console.log("data", data);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;