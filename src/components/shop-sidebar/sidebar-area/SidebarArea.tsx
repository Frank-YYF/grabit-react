import { useEffect, useState } from "react";
import PriceRangeSlider from "../../price-range/PriceRangeSlider";
import { GoChevronDown } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSliceData } from "@/hooks/useSliceData";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from 'framer-motion';

type ShowType = {
  categories: boolean; 
  weights: boolean;
  tags: boolean;
}

const SidebarArea = ({
  handleCategoryChange,
  handleWeightChange,
  handleColorChange,
  handleTagsChange,
  selectedColor,
  selectedTags,
  selectedCategory,
  selectedWeight,
  closeFilter,
  handlePriceChange,
  min,
  max,
  isFilterOpen,
  none = "",
}: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState<ShowType>({categories:false, weights: false, tags: false});

  useEffect(() => {
    const hiddenPaths = [
      "/product-left-sidebar/",
      "/product-right-sidebar/",
      "/product-according-left-sidebar/",
      "/product-according-right-sidebar/",
    ];
    setShowButton(hiddenPaths.includes(location.pathname));
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState({
    category: true,
    weight: true,
    color: true,
    price: true,
    tags: true,
  });

  const { data: data, error } = useSliceData('shopcategory');
  const { data: weightData } = useSliceData('sidebarweight');
  const { data: colorData } = useSliceData('shopcolor');
  const { data: tagData } = useSliceData('shoptags');

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const limit = 5;

  const handleToggleShow = (key: keyof ShowType) => setShow({ ...show, [key]: !show[key] });

  const getData = () => { 
      return show.categories == false? data.slice(0, limit) : data;
  };

  if (!weightData) return <div></div>;

  const getWeightData = () => {
      return show.weights == false? weightData.slice(0, limit) : weightData;
  };

  if (!colorData) return <div></div>;

  const getColorData = () => {
      return colorData;
  };

  if (!tagData) return <div></div>;

  const getTagData = () => {
      return show.tags == false? tagData.slice(0, limit) : tagData;
  };

  const renderIcon = (category: string) => {
    switch (category) {
      case "Dried Fruit":
        return "fi fi-rs-grape";
      case "Fresh Fruit":
        return "fi fi-rs-apple-whole";
      case "Snacks":
        return "fi fi-rs-popcorn";
      case "Cookies":
        return "fi fi-rs-cookie";
      case "Foods":
        return "fi fi-rs-hamburger";
      case "Tuber root":
        return "fi fi-rs-corn";
      case "Vegetables":
        return "fi fi-rs-tomato";
      case "Clothes":
        return "fi-rr-shop";
      case "jewellery":
        return "fi fi-rs-gem";
      case "unisex":
        return "fi fi-rs-portrait";
      default:
        return null;
    }
  };

  const handleFilterBtn = () => {
    navigate("/shop-left-sidebar-col-3");
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState: any) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const categories = getData();
  const WeightData = getWeightData();
  const color = getColorData();
  const Tags = getTagData();

  return (
    <>
      {isFilterOpen && (
        <div className="filter-sidebar-overlay" onClick={closeFilter}></div>
      )}
      <div
        className={`gi-shop-sidebar col-lg-3 col-md-12 m-t-991 ${none}`}
      >
        <div id="shop_sidebar">
          <div className="gi-sidebar-wrap">
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
              <AnimatePresence initial={false}>
                {isOpen.category && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className={`gi-cat-sub-dropdown gi-sb-block-content`}
                    >
                      <ul>
                        {/* Check if data is an array before mapping */}
                        {(categories && categories.length > 0) ? categories.map((category: any, index: number) => (
                          <li key={index}>
                            <Fade triggerOnce direction='up' duration={1000} delay={200} >
                              {/* Assuming ShopCategoryBlock accepts a 'data' prop */}
                              <div className="gi-sidebar-block-item">
                                <input
                                  checked={selectedCategory?.includes(
                                    category.category
                                  )}
                                  onChange={() =>
                                    handleCategoryChange(category.category)
                                  }
                                  type="checkbox"
                                />
                                <Link to="/">
                                  <span>
                                    <i
                                      className={`${renderIcon(category.category)}`}
                                    ></i>
                                    {category.category}
                                  </span>
                                </Link>
                                <span className="checked"></span>
                              </div>
                            </Fade>
                          </li>
                        )):[]}
                        <li>
                          <div className="gi-sidebar-block-item">
                            <a onClick={()=> handleToggleShow('categories')}><span>{show.categories ? 'less' : 'load more'}</span></a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <!-- Sidebar Weight Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <h3 className="gi-sidebar-title">Weight</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("weight")}
                  >
                    <GoChevronDown />
                  </div>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {isOpen.weight && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="gi-sb-block-content"
                    >
                      <ul>
                        {(WeightData && WeightData.length > 0) ? WeightData.map((data: any, index: number) => (
                          <li key={index}>
                            <Fade triggerOnce direction='up' duration={1000} delay={200} >
                              <div className="gi-sidebar-block-item">
                                <input
                                  checked={selectedWeight?.includes(data.weight)}
                                  onChange={() => handleWeightChange(data.weight)}
                                  type="checkbox"
                                />
                                <Link to="/">{data.weight}</Link>
                                <span className="checked"></span>
                              </div>
                            </Fade>
                          </li>
                        )):[]}
                        <li>
                          <div className="gi-sidebar-block-item">
                            <a onClick={()=> handleToggleShow('weights')}><span>{show.weights ? 'less' : 'load more'}</span></a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <!-- Sidebar Color item --> */}
            <div className="gi-sidebar-block color-block gi-sidebar-block-clr">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Color</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("color")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {isOpen.color && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="gi-sb-block-content gi-sidebar-dropdown"
                    >
                      <ul>
                        {(color && color.length > 0) ? color.map((data: any, index: number) => (
                          <li key={index}>
                            <div className="gi-sidebar-block-item">
                              <input
                                checked={selectedColor?.includes(data.color)}
                                onChange={() => handleColorChange(data.color)}
                                type="checkbox"
                                value=""
                              />
                              <span
                                className={`gi-clr-block`}
                                style={{ backgroundColor: data.color }}
                              ></span>
                              <span
                                style={{
                                  display: selectedColor.includes(data.color)
                                    ? "block"
                                    : "none",
                                }}
                                className={`${
                                  selectedColor.includes(data.color)
                                    ? "checked"
                                    : ""
                                }`}
                              ></span>
                            </div>
                          </li>
                        )):[]}
                      </ul>
                    </div>
                  </motion.div>)}
              </AnimatePresence>
            </div>
            {/* <!-- Sidebar Price Block --> */}
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
              <AnimatePresence initial={false}>
                {isOpen.price && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="gi-sb-block-content gi-price-range-slider es-price-slider"
                    >
                      <PriceRangeSlider
                        min={min}
                        max={max}
                        onPriceChange={handlePriceChange}
                      />
                    </div>
                  </motion.div>)}
              </AnimatePresence>
            </div>
            {/* <-- Sidebar tags --> */}
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
              <AnimatePresence initial={false}>
              {isOpen.tags && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="gi-tag-block gi-sb-block-content gi-sidebar-dropdown"
                    >
                      {(Tags && Tags.length > 0) ? Tags.map((data: any, index: number) => (
                        <a
                          key={index}
                          onClick={() => handleTagsChange(data.tags)}
                          className="gi-btn-2"
                          style={{
                            marginRight: "5px",
                            backgroundColor: selectedTags.includes(data.tags)
                              ? "#343a40"
                              : "#5caf90",
                          }}
                          color="#fff"
                        >
                          {data.tags}
                        </a>
                      )):[]}
                      <a onClick={()=> handleToggleShow('tags')} className="gi-btn-2"><small>{show.tags ? 'less' : 'load more'}</small></a>
                    </div>
                  </motion.div>)}
              </AnimatePresence>
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
      </div>
    </>
  );
};

export default SidebarArea;
