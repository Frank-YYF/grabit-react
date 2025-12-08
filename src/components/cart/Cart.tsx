import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeItem } from "../../store/reducers/cartSlice";
import { Fade } from "react-awesome-reveal";
import Spinner from "../button/Spinner";
import DiscountCoupon from "../discount-coupon/DiscountCoupon";
import QuantitySelector from "../quantity-selector/QuantitySelector";
import { Link } from "react-router-dom";
import { City, Country, State } from "@/types/data.types";
import { useCountries } from "@/hooks/useCountries";
import { useStates } from "@/hooks/useStates";
import { useCities } from "@/hooks/useCities";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState<{
    country: string,
    state: string,
    city: string,
  }>({
    country: "",
    state: "",
    city: ""
  });

  const filteredCountryData: Country[] = useCountries();
  const filteredStateData: State[]  = useStates(formData?.country || "");
  const filteredCityData: City[] = useCities(formData?.state || "");

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    console.log("{ name, value }", { name, value })
    setFormData({...formData, [name]: value });
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      setSubTotal(0);
      setVat(0);
      return;
    }

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.newPrice * item.quantity,
      0
    );
    setSubTotal(subtotal);
    // Calculate VAT
    const vatAmount = subtotal * 0.2;
    setVat(vatAmount);
  }, [cartItems]);

  const handleDiscountApplied = (discount:any) => {
    setDiscount(discount);
  };

  const discountAmount = subTotal * (discount / 100);
  const total = subTotal + vat - discountAmount;

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeItem(item.id));
  };

  const { data, error } = useSelector((state: RootState) => state.deal);

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
     return data;
  };

  return (
    <>
      <section className="gi-cart-section padding-tb-40">
        <h2 className="d-none">Cart Page</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "300",
              }}
              className="gi-pro-content cart-pro-title"
            >
              {" "}
              Add item in a cart.
            </div>
          ) : (
            <div className="row">
              {/* <!-- Sidebar Area Start --> */}
              <div className="gi-cart-rightside col-lg-4 col-md-12">
                <div className="gi-sidebar-wrap">
                  {/* <!-- Sidebar Summary Block --> */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">Summary</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <h4 className="gi-ship-title">Estimate Shipping</h4>
                      <div className="gi-cart-form">
                        <p>Enter your destination to get a shipping estimate</p>
                        <form action="#" method="post">
                          <span className="gi-cart-wrap">
                            <label>Country *</label>
                            <span className="gi-cart-select-inner">
                              <select
                                name="country"
                                id="gi-cart-select-country"
                                className="gi-cart-select"
                                defaultValue={formData.country}
                                aria-label="Select an country"
                                onChange={handleInputChange}
                              >
                                <option value="" disabled>
                                  Country
                                </option>
                                {filteredCountryData.map(
                                  (country: Country, index: number) => (
                                    <option key={index} value={country.iso2}>
                                      {country.name}
                                    </option>
                                  )
                                )}
                              </select>
                            </span>
                          </span>
                          <span className="gi-cart-wrap">
                            <label>State/Province</label>
                            <span className="gi-cart-select-inner">
                              <select
                                name="state"
                                id="gi-select-state"
                                className="gi-register-select"
                                onChange={handleInputChange}
                                aria-label="Select an state/province"
                              >
                                <option value="" disabled>
                                  Region/State
                                </option>
                                {filteredStateData && filteredStateData.length == 0 ? (
                                  <option disabled>Loading...</option>
                                ) : (
                                  filteredStateData.map((state: State, index) => (
                                    <option
                                      key={index}
                                      value={state.state_code}
                                    >
                                      {state.name}
                                    </option>
                                  ))
                                )}
                              </select>
                            </span>
                          </span>
                          <span className="gi-cart-wrap">
                            <label>City</label>
                            <span className="gi-cart-select-inner">
                              <select
                                name="city"
                                id="gi-select-city"
                                className="gi-register-select"
                                onChange={handleInputChange}
                                aria-label="Select an city"
                              >
                                <option value="" disabled>
                                  City
                                </option>
                                {filteredCityData && filteredCityData.length == 0 ? (
                                  <option disabled>Loading...</option>
                                ) : (
                                  filteredCityData.map((city: City, index) => (
                                    <option
                                      key={index}
                                      value={city.iso2}
                                    >
                                      {city.name}
                                    </option>
                                  ))
                                )}
                              </select>
                            </span>
                          </span>
                          <span className="gi-cart-wrap">
                            <label>Zip/Postal Code</label>
                            <input
                              type="text"
                              name="postalcode"
                              placeholder="Zip/Postal Code"
                            />
                          </span>
                        </form>
                      </div>
                    </div>

                    <div className="gi-sb-block-content">
                      <div className="gi-cart-summary-bottom">
                        <div className="gi-cart-summary">
                          <div>
                            <span className="text-left">Sub-Total</span>
                            <span className="text-right">
                              ${subTotal.toFixed(2)}
                            </span>
                          </div>
                          <div>
                            <span className="text-left">Delivery Charges</span>
                            <span className="text-right">
                              ${vat.toFixed(2)}
                            </span>
                          </div>
                          <DiscountCoupon
                            onDiscountApplied={handleDiscountApplied}
                          />
                          <div className="gi-cart-coupan-content">
                            <form
                              className="gi-cart-coupan-form"
                              name="gi-cart-coupan-form"
                              method="post"
                              action="#"
                            >
                              <input
                                className="gi-coupan"
                                type="text"
                                required
                                placeholder="Enter Your Coupan Code"
                                name="gi-coupan"
                                defaultValue=""
                              />
                              <button
                                className="gi-btn-2"
                                type="submit"
                                name="subscribe"
                                defaultValue=""
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                          <div className="gi-cart-summary-total">
                            <span className="text-left">Total Amount</span>
                            <span className="text-right">
                              ${total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gi-cart-leftside col-lg-8 col-md-12 m-t-991">
                {/* <!-- cart content Start --> */}
                <div className="gi-cart-content">
                  <div className="gi-cart-inner">
                    <div className="row">
                      <form action="#">
                        <div className="table-content cart-table-content">
                          <table>
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th style={{ textAlign: "center" }}>
                                  Quantity
                                </th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item: any, index: number) => (
                                <tr key={index}>
                                  <td
                                    data-label="Product"
                                    className="gi-cart-pro-name"
                                  >
                                    <Link to={`/product-left-sidebar`}>
                                      <img
                                        className="gi-cart-pro-img mr-4"
                                        src={item.image}
                                        alt=""
                                      />
                                      {item.title}
                                    </Link>
                                  </td>
                                  <td
                                    data-label="Price"
                                    className="gi-cart-pro-price"
                                  >
                                    <span className="amount">
                                      ${item.newPrice}
                                    </span>
                                  </td>
                                  <td
                                    data-label="Quantity"
                                    className="gi-cart-pro-qty"
                                    style={{ textAlign: "center" }}
                                  >
                                    <div className="cart-qty-plus-minus">
                                      <QuantitySelector
                                        quantity={item.quantity}
                                        id={item.id}
                                      />
                                    </div>
                                  </td>
                                  <td
                                    data-label="Total"
                                    className="gi-cart-pro-subtotal"
                                  >
                                    ${item.newPrice * item.quantity}
                                  </td>
                                  <td
                                    onClick={() => handleRemoveFromCart(item)}
                                    data-label="Remove"
                                    className="gi-cart-pro-remove"
                                  >
                                    <a>
                                      <i className="gicon gi-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="gi-cart-update-bottom">
                              <Link to={`/`}>Continue Shopping</Link>
                              <Link to="/checkout" className="gi-btn-2">
                                Check Out
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!--cart content End --> */}
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="gi-new-product padding-tb-40">
        <div className="container">
          <div className="row overflow-hidden m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="section-title-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <>
                    <h2 className="gi-title">
                      New <span>Arrivals</span>
                    </h2>
                    <p>Browse The Collection of Top Products</p>
                  </>
                </Fade>
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="gi-new-block m-minus-lr-12"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    slidesPerView={5}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                      },
                      426: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
