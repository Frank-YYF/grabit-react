import { Link } from "react-router-dom";

const FashionBlogTwoItem = ({ data }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="blog-info blog-3">
        <figure className="blog-img">
          <Link onClick={handleSubmit} to="/">
            <img src={data.image} alt="news imag" />
          </Link>
        </figure>
        <div className="detail">
          <div className="date">
            <h4>{data.date}</h4>
            <span>{data.month}</span>
          </div>
          <h3>
            <Link onClick={handleSubmit} to="/">
              {data.title}
            </Link>
          </h3>
          <div className="more-info">
            <Link onClick={handleSubmit} to="/blog-detail-left-sidebar">
              Read More <i className="fi-rr-angle-double-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionBlogTwoItem;
