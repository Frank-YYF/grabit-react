import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getRegistrationData } from "@/utility/storage/registration";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import { useNavigate } from "react-router-dom";
import { RegistrationData } from "@/types/data.types";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState<RegistrationData | null>(null);
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      const data = getRegistrationData();
      if (data.length > 0) {
        setUserData(data[data.length - 1]);
      }
    }
  }, [login]);

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

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/profile-edit");
  };

  return (
    <>
      <section className="gi-vendor-profile padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <Col lg={9} md={12} className="mb-24">
              <Row>
                <div className="container">
                  <div className="gi-vendor-cover">
                    <span
                      style={{ float: "inline-end", margin: "15px" }}
                      className="gi-register-wrap"
                    >
                      <button
                        onClick={handleSubmit}
                        style={{
                          backgroundColor: "white",
                          padding: "5px 10px",
                          borderRadius: "4px",
                        }}
                        className=""
                        type="submit"
                      >
                        Edit <i className="fi fi-rr-pencil"></i>
                      </button>
                    </span>
                    <div className="detail">
                      <img
                        src={
                          userData.profilePhoto ||
                          process.env.VITE_APP_URL +
                            "/assets/img/avatar/placeholder.jpg"
                        }
                        alt="vendor"
                      />
                      <div className="v-detail">
                        <h5>
                          {userData.firstName} {userData.lastName}
                        </h5>
                        <p>{userData.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
              <div className="gi-vendor-profile-card gi-vendor-profile-card">
                <div className="gi-vendor-card-body">
                  <div className="gi-vender-about-block">
                    <h5>Account Information</h5>
                  </div>
                  <Row className="mb-minus-24px">
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>E-mail address</h6>
                        <ul>
                          <li>
                            <strong>Email 1 : </strong>
                            {userData.email}
                          </li>
                          {/* <li><strong>Email 2 : </strong>support2@exapmle.com</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>Contact nubmer</h6>
                        <ul>
                          <li>
                            <strong>Phone Nubmer 1 : </strong>
                            {userData.phoneNumber}
                          </li>
                          {/* <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>Address</h6>
                        <ul>
                          <li>
                            <strong>Home : </strong>
                            {userData.address}.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
