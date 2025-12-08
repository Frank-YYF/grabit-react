import { Link } from "react-router-dom";

function CategoryBlock({ data, handleWeightChange, selectedWeight }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="gi-sidebar-block-item">
        <input
          checked={selectedWeight?.includes(data.weight)}
          onChange={() => handleWeightChange(data.weight)}
          type="checkbox"
          value=""
        />
        <Link onClick={handleSubmit} to="/">
          {data.weight}
        </Link>
        <span className="checked"></span>
      </div>
    </>
  );
}

export default CategoryBlock;
