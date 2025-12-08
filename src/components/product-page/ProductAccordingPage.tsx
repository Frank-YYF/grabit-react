import { useCallback } from "react";
import SidebarArea from "../shop-sidebar/sidebar-area/SidebarArea";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "../stars/StarRating";
import DiscountContent from "./discount-content/DiscountContent";
import { Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import SingleProductContent from "./single-product-content/SingleProductContent";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setRange } from "@/store/reducers/filterReducer";

const ProductPage = ({
  order = "",
  none = "none",
  lg = 12,
}) => {
  const dispatch = useDispatch();
  const {
    selectedCategory,
    selectedWeight,
    minPrice,
    maxPrice,
    selectedColor,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);

  const { data, error } = useSelector((state: RootState) => state.moreitems);


  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      dispatch(setRange({ min, max }));
    },
    [dispatch]
  );

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <Col
        lg={lg}
        md={12}
        className={`gi-pro-rightside gi-common-rightside ${order}`}
      >
        {/* <!-- Single product content Start --> */}
        <div className="single-pro-block">
          <SingleProductContent />
        </div>
        {/* <!--Single product content End -->
                    <!-- Add More and get discount content Start --> */}
        <div className="single-add-more m-tb-40">
          <Swiper
            loop={true}
            autoplay={{ delay: 1000 }}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            style={{ overflow: "hidden" }}
            className="gi-add-more-slider owl-carousel"
          >
            {data && data.length > 0 ? data.map((item: any, index: number) => (
              <SwiperSlide key={index} className="add-more-item">
                <a href="" className="gi-btn-2">
                  +
                </a>
                <div className="add-more-img">
                  <img src={item.image} alt="product" />
                </div>
                <div className="add-more-info">
                  <h5>{item.title}</h5>
                  <span className="gi-pro-rating">
                    <StarRating rating={item.rating} />
                  </span>
                  <span className="gi-price">
                    <span className="new-price">${item.newPrice}</span>
                    <span className="old-price">${item.oldPrice}</span>
                  </span>
                </div>
              </SwiperSlide>
            )):<></>}
          </Swiper>
        </div>
        {/* <!-- Single product tab start --> */}
        {/* <ProductTab /> */}
        <DiscountContent />
        {/* <!-- product details description area end --> */}
      </Col>
      {/* <!-- Sidebar Area Start --> */}

      <SidebarArea
        handlePriceChange={handlePriceChange}
        selectedCategory={selectedCategory}
        selectedWeight={selectedWeight}
        selectedColor={selectedColor}
        selectedTags={selectedTags}
        min={minPrice}
        max={maxPrice}
        none={none}
      />
    </>
  );
};

export default ProductPage;
