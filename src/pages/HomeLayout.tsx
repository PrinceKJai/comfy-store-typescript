import { Header, Navbar } from "@/components";
import Loading from "@/components/Loading";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log("navigation", navigation);

  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
};
export default HomeLayout;
