import { Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const Services = ({children = <></>}: any) => {
  const { data, error } = useSliceData('service');


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
      <section className="gi-service-section padding-tb-40">
        <div className="container">
          {children}
          <Row className=" m-tb-minus-12">
            {getData().map((item: any, index: number) => (
              <Fade
                triggerOnce
                direction="up"
                delay={400}
                key={index}
                className="gi-ser-content gi-ser-content-2 col-sm-6 col-md-6 col-lg-3 p-tp-12 wow fadeInUp">
                <div className="gi-ser-inner" key={index}>
                  <div className="gi-service-image">
                    <i className={item.icon}></i>
                  </div>
                  <div className="gi-service-desc">
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Services;
