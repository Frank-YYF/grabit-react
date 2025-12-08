import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import StarRating from "../stars/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "../../store/reducers/cartSlice";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import QuantitySelector from "../quantity-selector/QuantitySelector";
import { RootState } from "@/store";
import { showSuccessToast } from "@/utility/toast";
import ZoomImage from "@/components/zoom-image/ZoomImage";
import SizeOptions from "../product-item/SizeOptions";
import { Item } from "@/types/data.types";
import { Link } from "react-router-dom";

const QuickViewModal = ({ show, handleClose, data }: any) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [quantity, setQuantity] = useState(1);

  const handleCart = (data: Item) => {
    const isItemInCart = cartItems.some((item: Item) => item.id === data.id);

    if (!isItemInCart) {
      dispatch(addItem({ ...data, quantity: quantity }));
      showSuccessToast("Add product in Cart Successfully!", {
        icon: false,
      });
    } else {
      const updatedCartItems = cartItems.map((item: Item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
              price: item.newPrice + data.newPrice,
            } // Increment quantity and update price
          : item
      );
      dispatch(updateItemQuantity(updatedCartItems));
      showSuccessToast("Add product in Cart Successfully!", {
        icon: false,
      });
    }
  };

  return (
    <Fade>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="modal fade quickview-modal"
        id="gi_quickview_modal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close qty_close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
            <Modal.Body>
              <Row>
                <Col md={5} sm={12} className=" mb-767">
                  <div className="single-pro-img single-pro-img-no-sidebar">
                    <div className="single-product-scroll">
                      <div className={`single-slide zoom-image-hover`}>
                        <>
                          <ZoomImage src={data.image} alt="" />
                        </>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={7} sm={12}>
                  <div className="quickview-pro-content">
                    <h5 className="gi-quick-title">
                      <Link to="/product-left-sidebar">{data.title}</Link>
                    </h5>
                    <div className="gi-quickview-rating">
                      <StarRating rating={data.rating} />
                    </div>

                    <div className="gi-quickview-desc">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry`s
                      standard dummy text ever since the 1900s,
                    </div>

                    <div className="gi-quickview-price">
                      <span className="new-price">
                        ${data.newPrice * data.quantity}
                      </span>
                      <span className="old-price">${data.oldPrice}</span>
                    </div>

                    <div className="gi-pro-variation">
                      <div className="gi-pro-variation-inner gi-pro-variation-size gi-pro-size">
                        <div className="gi-pro-variation-content">
                          <SizeOptions
                            categories={[
                              "clothes",
                              "footwear",
                              "vegetables",
                              "accessorise",
                            ]}
                            subCategory={data.category}
                          />
                          {/* <ul className="gi-opt-size">
                            {options.map((data: any, index) => (
                              <li key={index} onClick={() => handleClick(index)} className={activeIndex === index ? "active" : ""}>
                                <a className="gi-opt-sz" data-tooltip={data.tooltip}>
                                  {data.value}
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    <div className="gi-quickview-qty">
                      <div className="qty-plus-minus gi-qty-rtl">
                        <QuantitySelector
                          quantity={quantity}
                          id={data.id}
                          setQuantity={setQuantity}
                        />
                      </div>
                      <div className="gi-quickview-cart ">
                        <button
                          onClick={() => handleCart(data)}
                          className="gi-btn-1"
                        >
                          <i className="fi-rr-shopping-basket"></i> Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </Fade>
  );
};

export default QuickViewModal;
