import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TrackOrderTwo = () => {
  const login = useSelector((state: RootState) => state.registration.isAuthenticated);

  if (!login) {
    return (
      <div className="container">
      <p>
        Please <Link to="/login">login</Link> or <Link to="/register">register</Link> to view this page.
      </p>
    </div>
    );
  }
  return (
    <>
      <section className="gi-Track-Order gi-track padding-tb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Details--> */}
              <div className="row">
                <div className="col-md-4 m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">order</span>
                    <span>#6152</span>
                  </div>
                </div>
                <div className="col-md-4 m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">Grasshoppers</span>
                    <span>v534hb</span>
                  </div>
                </div>
                <div className="col-md-4 m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">Expected date</span>
                    <span>June 17, 2019</span>
                  </div>
                </div>
              </div>
              <ul className="gi" data-gi-steps="5">
                <li className="gi-done">
                  Order <br></br> Confirmed
                </li>
                <li className="gi-done">
                  Processing <br></br> Order
                </li>
                <li className="gi-done">
                  Quality <br></br> Check
                </li>
                <li className="gi-todo">
                  Product <br></br> Dispatched
                </li>
                <li className="gi-todo">
                  Product <br></br> Delivered
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrderTwo;
