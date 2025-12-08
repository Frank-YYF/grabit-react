import { Col, Row } from "react-bootstrap";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const Facts = () => {
  const { data, error } = useSliceData('facts');

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
      <section className="gi-facts-section padding-tb-40">
        <div className="container">
          <Row className="m-tb-minus-12">
            {getData().map((item: any, index: any) => (
              <Col
                sm={12}
                md={6}
                lg={3}
                key={index}
                className="gi-facts-content p-tp-12"
              >
                <div className="gi-facts-inner">
                  <div className="gi-count">
                    <span className="counter">{item.counter}</span>
                  </div>
                  <div className="gi-facts-desc">
                    <h4>{item.name}</h4>
                    <p>{item.discription}</p>
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

export default Facts;
