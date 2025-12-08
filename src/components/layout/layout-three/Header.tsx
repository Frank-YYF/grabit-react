import HeaderTop from "./header/HeaderTop";
import HeaderBottom from "./header/HeaderBottom";
import HeaderManu from "./header/HeaderManu";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  return (
    <>
      {/* <Loader /> */}
      <header className="gi-header">
        <HeaderTop />
        <HeaderBottom wishlistItems={wishlistItems} cartItems={cartItems} />
        <HeaderManu />
      </header>
    </>
  );
}

export default Header;
