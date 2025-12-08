import { Fade } from "react-awesome-reveal";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import TrendingItem from "../../trending/trendingItem/TrendingItem";
import Spinner from "@/components/button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const FashionTopRatedProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    rows: 3,
    arrows: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          rows: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          rows: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          rows: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
    ],
  };

  const { data, error } = useSliceData('fashionrated');


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
      <Fade triggerOnce direction="up" delay={400}>
        <Col md={12}>
          <div className="section-title">
            <div className="section-detail">
              <h2 className="gi-title">
                Top <span>Rated</span>
              </h2>
            </div>
          </div>
        </Col>
        <Slider {...settings} className="gi-trending-slider">
          {getData().map((item: any, index: number) => (
            <TrendingItem key={index} data={item} />
          ))}
        </Slider>
      </Fade>
    </>
  );
};

export default FashionTopRatedProduct;
