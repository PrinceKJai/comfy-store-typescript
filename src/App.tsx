import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
//Action from react-router-dom
import { action as RegisterAction } from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: LandingLoader,
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: ProductsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: SingleProductLoader,
        },
        {
          path: "cart",
          element: <Cart />,
          errorElement: <ErrorElement />,
        },
        { path: "about", element: <About />, errorElement: <ErrorElement /> },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />,
        },
        {
          path: "orders",
          element: <Orders />,
          errorElement: <ErrorElement />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: RegisterAction
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
