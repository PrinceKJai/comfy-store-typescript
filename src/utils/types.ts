export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: string;
    price: string;
    shipping: boolean;
    colors: string[];
  };
};

export type ProductsMeta = {
  pagination: Pagination;
  categories: string[];
  companies: string[];
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
