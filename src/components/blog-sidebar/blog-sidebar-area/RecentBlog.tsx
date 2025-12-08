import Spinner from "@/components/button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  const { data, error } = useSliceData('recentblog');

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>
    <Spinner />
  </div>;

  const getData = () => {
    
    return data;
  };

  const categoryData = getData();
  return (
    <>
      {categoryData.map((data: any, index: number) => (
        <div key={index} className="gi-sidebar-block-item">
          <div className="gi-sidebar-block-img">
            <img src={data.image} alt="blog imag" />
          </div>
          <div className="gi-sidebar-block-detial">
            <h5 className="gi-blog-title">
              <Link to={`/blog-detail-left-sidebar`}>{data.title}</Link>
            </h5>
            <div className="gi-blog-date">{data.date}</div>
            <Link to={`/blog-left-sidebar`}>{data.category}</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentBlog;
