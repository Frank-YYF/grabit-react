import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import ScrollButton from "../../button/ScrollButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSelectedCategory } from "@/store/reducers/filterReducer";
import { useState } from "react";
import { slice } from "lodash";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSliceData } from "@/hooks/useSliceData";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownState, setDropdownState] = useState(null);
  const { selectedCategory } = useSelector((state: RootState) => state.filter);
  const { data, error } = useSliceData('shopcategory');


  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    return data.length > 6 ? slice(data, 0, 6) : data;
  };

  const toggleDropdown = (dropdown: any) => {
    setDropdownState((menu) => (menu === dropdown ? null : dropdown));
  };

  const CategoryData = getData();

  const handleCategoryChange = (category: any) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
    navigate("/shop-left-sidebar-col-3");
  };

  return (
    <>
      <footer className="gi-footer m-t-40">
        <div className="footer-container">
          <div className="footer-top padding-tb-80">
            <div className="container">
              <Row className="m-minus-991">
                <Col sm={12} lg={3}>
                  <Fade
                    duration={400}
                    triggerOnce
                    direction="up"
                    className=" gi-footer-cat"
                  >
                    <div className="gi-footer-widget gi-footer-company">
                      <img
                        src={
                          process.env.VITE_APP_URL +
                          "/assets/img/logo/logo.png"
                        }
                        className="gi-footer-logo"
                        alt="footer logo"
                      />
                      <p className="gi-footer-detail">
                        Grabit is the biggest market of grocery products. Get
                        your daily needs from our store.
                      </p>
                      <div className="gi-app-store">
                        <a className="app-img">
                          <img
                            src={
                              process.env.VITE_APP_URL +
                              "/assets/img/app/android.png"
                            }
                            className="adroid"
                            alt="apple"
                          />
                        </a>
                        <a className="app-img">
                          <img
                            src={
                              process.env.VITE_APP_URL +
                              "/assets/img/app/apple.png"
                            }
                            className="apple"
                            alt="apple"
                          />
                        </a>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-info">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("category")}
                        className="gi-footer-heading"
                      >
                        Category
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "category" ? "auto" : 0,
                          opacity: dropdownState === "category" ? 1 : 0,
                          translateY: dropdownState === "category" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "category" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          {CategoryData.map((data: any, index: number) => (
                            <li key={index} className="gi-footer-link">
                              <a
                                style={{ textTransform: "capitalize" }}
                                onClick={() =>
                                  handleCategoryChange(data.category)
                                }
                              >
                                {data.category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-account">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("company")}
                        className="gi-footer-heading"
                      >
                        Company
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "company" ? "auto" : 0,
                          opacity: dropdownState === "company" ? 1 : 0,
                          translateY: dropdownState === "company" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "company" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link">
                            <Link to="/about-us">About us</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/track-order`}>Delivery</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/privacy-policy`}>Legal Notice</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/terms-condition`}>Terms & conditions</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/checkout`}>Secure payment</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/contact-us`}>Contact us</Link>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-service">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("account")}
                        className="gi-footer-heading"
                      >
                        Account
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "account" ? "auto" : 0,
                          opacity: dropdownState === "account" ? 1 : 0,
                          translateY: dropdownState === "account" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "account" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link">
                            <Link to={`/register`}>Sign In</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/cart`}>View Cart</Link>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/privacy-policy`}>Return Policy</Link>
                          </li>
                          <li className="gi-footer-link">
                            <a>Become a Vendor</a>
                          </li>
                          <li className="gi-footer-link">
                            <a>Affiliate Program</a>
                          </li>
                          <li className="gi-footer-link">
                            <Link to={`/checkout`}>Payments</Link>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={3} className=" gi-footer-cont-social">
                  <>
                    <div className="gi-footer-contact">
                      <div className="gi-footer-widget">
                        <h4
                          onClick={() => toggleDropdown("contact")}
                          className="gi-footer-heading"
                        >
                          Contact
                          <div className="gi-heading-res">
                            <i
                              className="fi-rr-angle-small-down"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </h4>
                        <motion.div
                          className="gi-footer-links gi-footer-dropdown"
                          initial={{ height: 0, opacity: 0, translateY: -20 }}
                          animate={{
                            height: dropdownState === "contact" ? "auto" : 0,
                            opacity: dropdownState === "contact" ? 1 : 0,
                            translateY: dropdownState === "contact" ? 0 : -20,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                            display: "block",
                            paddingBottom:
                              dropdownState === "contact" ? "20px" : "0px",
                          }}
                        >
                          <ul className="align-itegi-center">
                            <li className="gi-footer-link gi-foo-location">
                              <span>
                                <i className="fi fi-rr-marker location svg_img foo_svg"></i>
                              </span>
                              <p>
                                2548 Broaddus Maple Court, Madisonville KY 4783,
                                USA.
                              </p>
                            </li>
                            <li className="gi-footer-link gi-foo-call">
                              <span>
                                <i className="fi fi-brands-whatsapp svg_img foo_svg"></i>
                              </span>
                              <a href="tel:+009876543210">+00 9876543210</a>
                            </li>
                            <li className="gi-footer-link gi-foo-mail">
                              <span>
                                <i className="fi fi-rr-envelope"></i>
                              </span>
                              <a href="mailto:example@email.com">
                                example@email.com
                              </a>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                    <div className="gi-footer-social">
                      <div className="gi-footer-widget">
                        <motion.div
                          className="gi-footer-links gi-footer-dropdown"
                          initial={{ height: 0, opacity: 0, translateY: -20 }}
                          animate={{
                            height: dropdownState === "contact" ? "auto" : 0,
                            opacity: dropdownState === "contact" ? 1 : 0,
                            translateY: dropdownState === "contact" ? 0 : -20,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          <ul className="align-itegi-center">
                            <li className="gi-footer-link">
                              <a>
                                <i
                                  className="gicon gi-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="gi-footer-link">
                              <a>
                                <i
                                  className="gicon gi-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="gi-footer-link">
                              <a>
                                <i
                                  className="gicon gi-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="gi-footer-link">
                              <a>
                                <i
                                  className="gicon gi-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="gi-bottom-info">
                  {/* <!-- Footer Copyright Start --> */}
                  <div className="footer-copy">
                    <div className="footer-bottom-copy ">
                      <div className="gi-copy">
                        Copyright ©{" "}
                        <a className="site-name" href={`${process.env.VITE_APP_URL}/`}>
                          Grabit{" "}
                        </a>
                        all rights reserved. Powered by Grabit.
                      </div>
                    </div>
                  </div>
                  {/* <!-- Footer Copyright End -->
                            <!-- Footer payment --> */}
                  <div className="footer-bottom-right">
                    <div className="footer-bottom-payment d-flex justify-content-center">
                      <div className="payment-link">
                        <img
                          src={
                            process.env.VITE_APP_URL +
                            "/assets/img/hero-bg/payment.png"
                          }
                          alt="payment"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Footer payment --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollButton />
    </>
  );
}

export default Footer;
