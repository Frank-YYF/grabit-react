import { Link } from "react-router-dom";

const CategoryItemTwo = ({ data }: any) => {
  return (
    <>
      <div className="gi-cat-icon">
        <span className="gi-lbl">{data.percentage}</span>
        <img src={data.image} alt="category" />
        <div className="gi-cat-detail">
          <Link to="/shop-left-sidebar-col-3">
            <h4 className="gi-cat-title">{data.name}</h4>
          </Link>
          <p className="items">{data.item} Items</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItemTwo;
