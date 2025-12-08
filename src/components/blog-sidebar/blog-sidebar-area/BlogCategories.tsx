import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "@/store/reducers/filterReducer";
import { useSliceData } from "@/hooks/useSliceData";
import { Link } from "react-router-dom";

const BlogCategories = ({
  selectedCategory,
}: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(true);

  const { data, error } = useSliceData('blogcategory');


  useEffect(() => {
    setShowButton(location.pathname !== "/blog-left-sidebar/");
  }, [location.pathname]);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    return data;
  };

  const categoryData = getData();

  const handleFilterBtn = () => {
    navigate("/blog-left-sidebar/");
  };

  const handleCategoryChange = (category: any) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat: any) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  return (
    <>
      {/* <!-- Sidebar Category Block --> */}
      <div className="gi-sidebar-block">
        <div className="gi-sb-title">
          <h3 className="gi-sidebar-title">Categories</h3>
        </div>
        <div className="gi-blog-block-content gi-sidebar-dropdown">
          <ul>
            {categoryData.map((data: any, index: number) => (
              <li key={index}>
                <div className="gi-sidebar-block-item">
                  <input
                    checked={selectedCategory?.includes(data.category)}
                    onChange={() => handleCategoryChange(data.category)}
                    type="checkbox"
                  />{" "}
                  <Link to={`/`}>
                    {data.category}
                    <span title="Products">- {data.count}</span>
                  </Link>
                  <span className="checked"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- Sidebar Category Block --> */}

      {showButton && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button onClick={handleFilterBtn} className="gi-btn-2">
            Filter
          </button>
        </div>
      )}
    </>
  );
};

export default BlogCategories;
