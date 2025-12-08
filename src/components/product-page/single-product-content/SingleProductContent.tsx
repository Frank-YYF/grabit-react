import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuantitySelector from "../../quantity-selector/QuantitySelector";
import Spinner from "@/components/button/Spinner";
import ZoomImage from "@/components/zoom-image/ZoomImage";
import { useSliceData } from "@/hooks/useSliceData";

const SingleProductContent = () => {
  const [quantity, setQuantity] = useState(1);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, []);

  useEffect(() => {
    setIsSliderInitialized(true);
  }, [isSliderInitialized]);

  const handleSlider1Click = (index: any) => {
    if (slider2.current) {
      slider2.current.slickGoTo(index);
    }
  };

  const handleSlider2Click = (index: any) => {
    if (slider1.current) {
      slider1.current.slickGoTo(index);
    }
  };

  const { data, error } = useSliceData('productimage');


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
      <div className="single-pro-inner">
        <Row>
          {isSliderInitialized && (
            <Col className="single-pro-img">
              <div className="single-product-scroll">
                <Slider
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  fade={false}
                  asNavFor={nav2 as Slider}
                  focusOnSelect={true}
                  ref={slider1}
                  className="single-product-cover"
                >
                  {getData().map((item: any, index: any) => (
                    <div
                      key={index}
                      className="single-slide zoom-image-hover"
                      onClick={() => handleSlider1Click(index)}
                    >
                      <ZoomImage
                        src={item.image}
                        alt="" />
                    </div>
                  ))}
                </Slider>
                <Slider
                  slidesToShow={4}
                  slidesToScroll={1}
                  asNavFor={nav1 as Slider}
                  dots={false}
                  arrows={true}
                  focusOnSelect={true}
                  ref={slider2}
                  className="single-nav-thumb"
                >
                  {getData().map((item: any, index: number) => (
                    <div
                      key={index}
                      className="single-slide"
                      onClick={() => handleSlider2Click(index)}
                    >
                      <img className="img-responsive" src={item.image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          )}
          <Col className="single-pro-desc m-t-991">
            <div className="single-pro-content">
              <h5 className="gi-single-title">
                Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips
                & Snacks.
              </h5>
              <div className="gi-single-rating-wrap">
                <div className="gi-single-rating">
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star-o"></i>
                </div>
                <span className="gi-read-review">
                  |&nbsp;&nbsp;<a href="#gi-spt-nav-review">992 Ratings</a>
                </span>
              </div>

              <div className="gi-single-price-stoke">
                <div className="gi-single-price">
                  <div className="final-price">
                    $664.00<span className="price-des">-78%</span>
                  </div>
                  <div className="mrp">
                    M.R.P. : <span>$2,999.00</span>
                  </div>
                </div>
                <div className="gi-single-stoke">
                  <span className="gi-single-sku">SKU#: WH12</span>
                  <span className="gi-single-ps-title">IN STOCK</span>
                </div>
              </div>
              <div className="gi-single-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1990.
              </div>

              <div className="gi-single-list">
                <ul>
                  <li>
                    <strong>Closure :</strong> Hook & Loop
                  </li>
                  <li>
                    <strong>Sole :</strong> Polyvinyl Chloride
                  </li>
                  <li>
                    <strong>Width :</strong> Medium
                  </li>
                  <li>
                    <strong>Outer Material :</strong> A-Grade Standard Quality
                  </li>
                </ul>
              </div>

              <div className="gi-pro-variation">
                <div className="gi-pro-variation-inner gi-pro-variation-size">
                  <span>Weight</span>
                  <div className="gi-pro-variation-content">
                    <ul>
                      <li className="active">
                        <span>250g</span>
                      </li>
                      <li>
                        <span>500g</span>
                      </li>
                      <li>
                        <span>1kg</span>
                      </li>
                      <li>
                        <span>2kg</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gi-single-qty">
                <div className="qty-plus-minus ">
                  <QuantitySelector setQuantity={setQuantity} quantity={quantity} id={data.id} />
                </div>
                <div className="gi-single-cart">
                  <button className="btn btn-primary gi-btn-1">
                    Add To Cart
                  </button>
                </div>
                <div className="gi-single-wishlist">
                  <a className="gi-btn-group wishlist" title="Wishlist">
                    <i className="fi-rr-heart"></i>
                  </a>
                </div>
                <div className="gi-single-quickview">
                  <a
                    className="gi-btn-group quickview"
                    data-link-action="quickview"
                    title="Quick view"
                    data-bs-toggle="modal"
                    data-bs-target="#gi_quickview_modal"
                  >
                    <i className="fi-rr-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleProductContent;
