import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import tags from "@/utility/data/tags";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedBrands,
  setSelectedCategory,
} from "@/store/reducers/filterReducer";
import { useSliceData } from "@/hooks/useSliceData";

const FashionSidebar = ({
  isSidebarOpen,
  closeSidebar,
  MinPrice,
  MaxPrice,
  selectedBrands,
  selectedCategory,
}: any) => {
  const dispatch = useDispatch();
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
      iconName: "shop",
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
      iconName: "cupcake",
      categories: ["Sports", "party wear", "Casual", "Baby shoes"],
    },
    {
      groupname: "accessories",
      iconName: "drink-alt",
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
      iconName: "popcorn",
      categories: ["snacks", ""],
    },
    {
      groupname: "spice",
      iconName: "cupcake",
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

  const { data: BrandData, error: brandError } = useSliceData('fashionbrand');

  const { data: footwearData, error: footwearError } = useSliceData('fashionfootwear');

  const { data: accessoriesData, error: accessoriesError } = useSliceData('fashionaccessories');

  useEffect(() => {
    setShowButton(location.pathname !== "/fashion-shop-left-sidebar-col-3/");
  }, [location.pathname]);

  if (clothesError || footwearError || accessoriesError || brandError)
    return <div>Failed to load products</div>;
  if (!clothesData || !footwearData || !accessoriesData) return <></>;

  if (!BrandData) return <></>;

  const allItems = [
    ...clothesData,
    ...footwearData,
    ...accessoriesData,
  ];

  const handlePriceChange = (min: any, max: any) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  const handleBrandChange = (brand: any) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b: any) => b !== brand)
      : [...selectedBrands, brand];
    dispatch(setSelectedBrands(updatedBrands));
  };

  const handleCategoryChange = (category: any) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat: any) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  const handleFilterBtn = () => {
    navigate("/fashion-shop-left-sidebar-col-3");
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState: any) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="col-lg-3 sidebar-dis-991 h-sidebar">
      <div
        style={{ display: isSidebarOpen ? "block" : "none" }}
        className="filter-sidebar-overlay"
        onClick={closeSidebar}
      ></div>
      {isSidebarOpen && (
        <div className={`gi-shop-sidebar-2 ${isSidebarOpen ? "gi-open" : ""}`}>
          <div className="gi-close-btn">
            <h3>List</h3>
            <a
              onClick={closeSidebar}
              className="gi-cat-close gi-header-close-buttons"
            >
              <i className="fi-rr-cross-small"></i>
            </a>
          </div>
          <div id="shop_sidebar">
            <div
              style={{ backgroundColor: "#fff" }}
              className="gi-sidebar-wrap"
            >
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
                          <i
                            style={{ marginRight: "5px" }}
                            className={`fi-rr-${categoryGroup.iconName}`}
                          ></i>
                          {categoryGroup.groupname.charAt(0).toUpperCase() +
                            categoryGroup.groupname.slice(1)}
                        </h6>
                        <ul>
                          {filteredItems.map((data, index) => (
                            <div key={index} className="gi-sidebar-block-item">
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
                                <span className="p-25">{data.category}</span>
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
                <div
                  style={{ display: isOpen.brand ? "block" : "none" }}
                  className="gi-sb-block-content"
                >
                  <ul>
                    {BrandData.map((data: any, index: number) => (
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
              </div>
              {/* <!-- Sidebar Material Block --> */}

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
                <div
                  style={{ display: isOpen.tags ? "block" : "none" }}
                  className="gi-tag-block gi-sb-block-content"
                >
                  {tags.map((data, index) => (
                    <a
                      onClick={handleSubmit}
                      key={index}
                      href="${Link}/shop-left-sidebar-col-3"
                      className="gi-btn-2"
                    >
                      {data.name}
                    </a>
                  ))}
                </div>
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
      )}
    </div>
  );
};

export default FashionSidebar;
