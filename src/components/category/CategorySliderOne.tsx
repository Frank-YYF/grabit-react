import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryItem from "../product-item/CategoryItem";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const CategorySliderOne = ({
  className = "padding-tb-40",
}) => {
  const { data, error } = useSliceData('categorysliderone');

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
    <section className={`gi-category body-bg ${className}`}>
      <div className="container">
        <Row className="m-b-minus-15px">
          <Col xl={12}>
            <Swiper
              loop={true}
              autoplay={{ delay: 1000 }}
              slidesPerView={5}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
                425: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 6,
                },
              }}
              className="gi-category-block owl-carousel"
            >
              {getData().map((item: any, index: number) => (
                <SwiperSlide
                  key={index}
                  className={`gi-cat-box gi-cat-box-${item.num}`}
                >
                  <CategoryItem data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CategorySliderOne;
