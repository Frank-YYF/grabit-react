import { Col, Row } from "react-bootstrap";
import Questions from "./questions/Questions";

const Faq = () => {
  return (
    <>
      <section className="gi-faq padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              frequently asked <span>questions</span>
            </h2>
            <p>Customer service management.</p>
          </div>
          <Row>
            <Col lg={6}>
              <Questions keyslice="questions" />
            </Col>
            <Col lg={6} className="m-t-991">
              <Questions keyslice="questionstwo" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Faq;
