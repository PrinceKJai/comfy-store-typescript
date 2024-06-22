import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser } from "@/features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // temp
  // const [user, setUser] = useState<{ username: string } | null>({
  //   username: "demo user",
  // });

  const { user } = useAppSelector((state) => state.userState);

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {/* USER */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
