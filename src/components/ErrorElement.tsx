import { useRouteError } from "react-router-dom";
//This error component will appear within the app without breaking the entire app and will display error only when we navigate to the page where the error occurs
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h4 className="font-bold text-4xl">there was an error... </h4>;
};
export default ErrorElement;
