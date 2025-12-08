import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import SmoothCollapse from "react-smooth-collapse";
import { useSliceData } from "@/hooks/useSliceData";

const SidebarCategory = ({
  MinPrice,
  MaxPrice,
  selectedBrands,
  selectedCategory,
  selectedTags,
  handlePriceChange,
  handleTagsChange,
  handleCategoryChange,
  handleBrandChange,
}: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState({
    category: true,
    brand: true,
    material: true,
    price: true,
    tags: true,
  });
  const [showButton, setShowButton] = useState(true);
  const priceRanges = [
    { name: "Under $50", min: 0, max: 50 },
    { name: "$50 to $100", min: 50, max: 100 },
    { name: "$100 to $200", min: 100, max: 200 },
    { name: "Above $200", min: 200, max: Infinity },
  ];

  const groupCategory: any = [
    {
      groupname: "clothes",
      categories: [
        "Baby Wear",
        "Winter Wear",
        "men's wear",
        "women's wear",
        "unisex",
      ],
    },
    {
      groupname: "footwear",
      categories: ["Sports", "party wear", "Casual", "Baby shoes"],
    },
    {
      groupname: "accessories",
      categories: [
        "Belt",
        "wallet",
        "perfume",
        "shampoo",
        "Body Lotion",
        "jewellery",
        "Lipstick",
        "makeup kit",
      ],
    },
    {
      groupname: "snacks",
      categories: ["snacks", ""],
    },
    {
      groupname: "spice",
      categories: ["", ""],
    },
    {
      groupname: "juice",
      categories: ["", ""],
    },
    {
      groupname: "drinks",
      categories: ["", ""],
    },
    {
      groupname: "fruits",
      categories: ["", ""],
    },
    {
      groupname: "vegetable",
      categories: ["", ""],
    },
  ];

  const { data: clothesData, error: clothesError } = useSliceData('fashionclothes');
  const { data: brandData, error: brandError } = useSliceData('fashionbrand');
  const { data: footwearData, error: footwearError } = useSliceData('fashionfootwear');
  const { data: accessoriesData, error: accessoriesError } = useSliceData('fashionaccessories');
  const { data: tagData, error: tagError } = useSliceData('fashiontags');

  useEffect(() => {
    setShowButton(location.pathname !== "/fashion-shop-left-sidebar-col-3/");
  }, [location.pathname]);

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState: any) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  if (clothesError || footwearError || accessoriesError || brandError)
    return <div>Failed to load products</div>;
  if (!clothesData || !footwearData || !accessoriesData || tagError)
    return <div></div>;

  if (!brandData) return <div></div>;

  const allItems = [
    ...clothesData,
    ...footwearData,
    ...accessoriesData,
  ];

  if (!tagData) return <div></div>;

  const handleFilterBtn = () => {
    navigate("/fashion-shop-left-sidebar-col-3");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="gi-shop-sidebar-overlay"></div>
      <div className="gi-shop-sidebar-2">
        <div className="gi-close-btn">
          <h3>List</h3>
          <a onClick={handleSubmit} href="" className="gi-cat-close">
            <i className="fi-rr-cross-small"></i>
          </a>
        </div>
        <div id="shop_sidebar">
          <div style={{ backgroundColor: "#fff" }} className="gi-sidebar-wrap">
            {/* <!-- Sidebar Category Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Category</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("category")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <SmoothCollapse
                expanded={isOpen.category}
                heightTransition="1.5s ease"
              >
                <div
                  style={{ display: isOpen.category ? "block" : "none" }}
                  className="gi-sb-block-content gi-sidebar-dropdown"
                >
                  {groupCategory.map((categoryGroup: any, index: number) => {
                    const filteredItems = allItems.filter((item) =>
                      categoryGroup.categories.includes(item.category)
                    );

                    if (filteredItems.length === 0) {
                      return null;
                    }

                    return (
                      <div key={index} className="cat-drop">
                        <h6>
                          <i className={`fi-rr-${categoryGroup.groupname}`}></i>
                          {categoryGroup.groupname.charAt(0).toUpperCase() +
                            categoryGroup.groupname.slice(1)}
                        </h6>
                        <ul>
                          {filteredItems.map((data, index) => (
                            <div
                              key={index}
                              className="gi-sidebar-block-item gi-sidebar-fashion-item"
                            >
                              <input
                                onChange={() =>
                                  handleCategoryChange(data.category)
                                }
                                checked={selectedCategory?.includes(
                                  data.category
                                )}
                                type="checkbox"
                                value=""
                              />
                              <a onClick={handleSubmit} href={`${process.env.VITE_APP_URL}/`}>
                                <span className="p-30">{data.category}</span>
                                <span className="avil">({data.count})</span>
                              </a>
                              <span className="checked"></span>
                            </div>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </SmoothCollapse>
            </div>
            {/* <!-- Sidebar Size Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Brand</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("brand")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <SmoothCollapse
                expanded={isOpen.brand}
                heightTransition="1s ease"
              >
                <div
                  style={{ display: isOpen.brand ? "block" : "none" }}
                  className="gi-sb-block-content"
                >
                  <ul>
                    {brandData.map((data: any, index: number) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            onChange={() => handleBrandChange(data.brand)}
                            checked={selectedBrands?.includes(data.brand)}
                            type="checkbox"
                            value=""
                          />
                          <Link onClick={handleSubmit} to="/">
                            {data.brand}
                          </Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SmoothCollapse>
            </div>

            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Price</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("price")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <SmoothCollapse
                expanded={isOpen.price}
                heightTransition="1s ease"
              >
                <div
                  style={{ display: isOpen.price ? "block" : "none" }}
                  className="gi-sb-block-content"
                >
                  <ul>
                    {priceRanges.map((data, index) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            onChange={() =>
                              handlePriceChange(data.min, data.max)
                            }
                            checked={
                              MinPrice === data.min && MaxPrice === data.max
                            }
                            type="checkbox"
                            value=""
                          />
                          <Link onClick={handleSubmit} to="/">
                            {data.name}
                          </Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SmoothCollapse>
            </div>
            {/* <!-- Sidebar tags --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Tags</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("tags")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <SmoothCollapse expanded={isOpen.tags} heightTransition="1s ease">
                <div
                  style={{ display: isOpen.tags ? "block" : "none" }}
                  className="gi-tag-block gi-sb-block-content"
                >
                  {tagData.map((data: any, index: number) => (
                    <a
                      onClick={() => handleTagsChange(data.tags)}
                      key={index}
                      className="gi-btn-2"
                      style={{
                        marginRight: "5px",
                        backgroundColor: selectedTags.includes(data.tags)
                          ? "#343a40"
                          : "#516ebf",
                      }}
                    >
                      {data.tags}
                    </a>
                  ))}
                </div>
              </SmoothCollapse>

              {showButton && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingTop: "20px",
                  }}
                >
                  <button onClick={handleFilterBtn} className="gi-btn-2">
                    Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="gi-banner-side">
          <div className="gi-banner-block-side gi-banner-block-side-2 gi-banner-block-1">
            <div className="banner-block-side banner-block">
              <div className="banner-content">
                <div className="banner-text">
                  <span className="gi-banner-title">
                    Our top most products check it now
                  </span>
                </div>
                <a
                  onClick={handleSubmit}
                  href={`${process.env.VITE_APP_URL}/shop-left-sidebar-col-3`}
                  className="gi-btn-2"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCategory;
