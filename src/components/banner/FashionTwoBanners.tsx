import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const FashionTwoBanners = () => {
  const { data, error } = useSliceData('fashiontwobanner');


  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="gi-offer-section padding-tb-40">
        {/* <!--  Offer banners --> */}
        <div className="container">
          <Row>
            <Col xl={4} md={6} className="wow fadeInUp" data-wow-duration="2s">
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">50% Off</span>
                      <img
                        src={
                          process.env.VITE_APP_URL +
                          "/assets/img/banner/12.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                      <h5>Women&apos;s Collection</h5>
                      <Link
                        to="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col xl={4} md={6} className="wow fadeInUp" data-wow-duration="2s">
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners m-t-767">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">50% Off</span>
                      <img
                        src={
                          process.env.VITE_APP_URL +
                          "/assets/img/banner/13.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                      <h5>Kid&apos;s Collection</h5>
                      <Link
                        to="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col
              xl={4}
              md={6}
              className="wow fadeInUp d-n-1199"
              data-wow-duration="2s"
            >
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners m-t-767">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">50% Off</span>
                      <img
                        src={
                          process.env.VITE_APP_URL +
                          "/assets/img/banner/14.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                      <h5>Men&apos;s Collection</h5>
                      <Link
                        to="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FashionTwoBanners;
