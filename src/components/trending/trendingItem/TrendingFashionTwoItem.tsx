import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "../../../store/reducers/cartSlice";
import { showSuccessToast } from "@/utility/toast";
import { RootState } from "@/store";
import { Item } from "@/types/data.types";
import { Link } from "react-router-dom";

const TrendingFashionTwoItem = ({ data }: { data: Item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleCart = (data: Item) => {
    const isItemInCart = cartItems.some((item: Item) => item.id === data.id);

    if (!isItemInCart) {
      dispatch(addItem({ ...data, quantity: 1 }));
      showSuccessToast("Add product in Cart Successfully!");
    } else {
      const updatedCartItems = cartItems.map((item: Item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.newPrice + data.newPrice,
            } // Increment quantity and update price
          : item
      );
      dispatch(updateItemQuantity(updatedCartItems));
      showSuccessToast("Add product in Cart Successfully!");
    }
  };
  return (
    <div className="gi-all-product-block">
      <div className="gi-all-product-inner">
        <div className="gi-pro-image-outer">
          <div className="gi-pro-image">
            <Link to={`/product-left-sidebar`} className="image">
              <img className="main-image" src={data.image} alt="Product" />
            </Link>
          </div>
        </div>
        <div className="gi-pro-content">
          <h5 className="gi-pro-title">
            <Link to={`/product-left-sidebar`}>{data.title}</Link>
          </h5>
          <h6 className="gi-pro-stitle">
            <Link to={`/shop-left-sidebar-col-3`}>{data.name}</Link>
          </h6>
          <div className="gi-pro-rat-price">
            <div className="gi-pro-rat-pri-inner">
              <span className="gi-price">
                <span className="new-price">${data.newPrice}.00</span>
                <span className="old-price">${data.oldPrice}.00</span>
              </span>
            </div>
          </div>
          <a
            className="add-to-cart"
            title="Add To Cart"
            onClick={() => handleCart(data)}
          >
            <i className="fi-rr-shopping-basket"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingFashionTwoItem;
