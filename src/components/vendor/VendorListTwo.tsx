import { RootState } from "@/store";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";
import { Link } from "react-router-dom";

const VendorList = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  const { data, error } = useSliceData('vendorListTwo');


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

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <Link to="/login">login</Link> or <Link to="/register">register</Link>{" "}
          to view this page.
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="gi-Single-Vendor padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            {getData().map((item: any, index: number) => (
              <Col lg={3} sm={6} className="mb-24" key={index}>
                <div className="gi-vendor-card">
                  <div className="gi-vendor-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="gi-vendor-card-inner">
                    <Link to="/catalog-single-vendor">
                      <h6 className="name">{item.name}</h6>
                    </Link>
                    <p className="des">( {item.description} )</p>
                    <div className="row info">
                      <div className="col-6">
                        <div className="gi-catalog-ratings-info">
                          <h6>Level</h6>
                          <p>
                            {item.level} / {item.levelOutOf}
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gi-catalog-ratings-info">
                          <h6>Products</h6>
                          <p>{item.products}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default VendorList;
