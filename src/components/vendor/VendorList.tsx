import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";
import { Link } from "react-router-dom";

const VendorList = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const { data, error } = useSliceData('vendorList');


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
      <div className="padding-tb-40">
        {getData().map((item: any, index: number) => (
          <section
            className="section gi-catalog-multi-vendor m-b-30"
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="gi-multi-vendor-detail">
                  <div className="gi-page-description-info">
                    <div className="gi-catalog-vendor">
                      <img src={item.image} alt="vendor img" />
                    </div>
                    <div className="gi-catalog-vendor-info">
                      <div className="row vendor-card-height">
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <Link to={`/catalog-single-vendor`}>
                              <h6 className="name">{item.name}</h6>
                            </Link>
                            <p>( {item.description} )</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Level</h6>
                            <p>
                              ( Level : {item.level} out of {item.levelOutOf} )
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Seller Products</h6>
                            <p>{item.products} Products</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Seller since</h6>
                            <p>2year and 10months</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default VendorList;
