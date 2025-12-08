import { Link } from "react-router-dom";

function BlogItem({ data }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <figure className="blog-img">
        <a onClick={handleSubmit} >
          <img src={data.image} alt="news imag" />
        </a>
      </figure>
      <div className="detail">
        <label>
          {data.date} -{" "}
          <a onClick={handleSubmit} >
            {data.name}
          </a>
        </label>
        <h3>
          <a onClick={handleSubmit} >
            {data.title}
          </a>
        </h3>
        <div className="more-info">
          <Link to="/blog-detail-left-sidebar">
            Read More
            <i className="fi-rr-angle-double-small-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
