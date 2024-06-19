import { Header } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className='align-element py-20'>
      <Header />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
