import { Form, useLoaderData, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="text"
        name="search"
        defaultValue={search}
        label="Search Product"
      />
      {/* CATEGORY */}
      <FormSelect
        name="category"
        defaultValue={category}
        label="Search Category"
        options={meta.categories}
      />
      {/* COMPANY */}
      <FormSelect
        name="company"
        defaultValue={company}
        label="Search company"
        options={meta.companies}
      />
      {/* ORDER */}
      <FormSelect
        name="order"
        defaultValue={order}
        label="order by"
        options={["a-z", "z-a", "high", "low"]}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}
export default Filters;
