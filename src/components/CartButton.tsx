import { useAppSelector } from "@/hooks";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function CartButton() {
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );
  const { user } = useAppSelector((state) => state.userState);

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {user ? numItemsInCart : 0}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
