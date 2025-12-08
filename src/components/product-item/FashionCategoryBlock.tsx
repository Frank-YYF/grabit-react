import { Link } from "react-router-dom";

function FashionCategoryBlock({ data }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="gi-sidebar-block-item">
        <input type="checkbox" />
        <Link onClick={handleSubmit} to="/">
          <span>
            {/* <i className={`${renderIcon(data.category)}`}></i> */}
            {data.category}
          </span>
          <span className="avil">({data.count})</span>
        </Link>
        <span className="checked"></span>
      </div>
    </>
  );
}

export default FashionCategoryBlock;
