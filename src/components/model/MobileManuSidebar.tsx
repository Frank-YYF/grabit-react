import { useState } from "react";
import classic from "@/utility/header/classic";
import { Link } from "react-router-dom";
import home from "@/utility/header/home";
import banner from "@/utility/header/benner";
import column from "@/utility/header/columns";
import list from "@/utility/header/list";
import blog from "@/utility/header/blog";
import pages from "@/utility/header/pages";
import SmoothCollapse from "react-smooth-collapse";

const MobileManuSidebar = ({
  isMobileMenuOpen,
  closeMobileManu,
  toggleMainMenu,
  activeMainMenu,
}: any) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (submenu: string) => {
    setActiveSubMenu((prevSubMenu) =>
      prevSubMenu === submenu ? null : submenu
    );
  };

  return (
    <>
      <div
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        onClick={closeMobileManu}
        className="gi-mobile-menu-overlay"
      ></div>
      {isMobileMenuOpen && (
        <div id="gi-mobile-menu" className="gi-mobile-menu gi-menu-open">
          <div className="gi-menu-title">
            <span className="menu_title">My Menu</span>
            <button onClick={closeMobileManu} className="gi-close-menu">
              ×
            </button>
          </div>
          <div className="gi-menu-inner">
            <div className="gi-menu-content">
              <ul>
                <li
                  className={`dropdown drop-list ${
                    activeMainMenu ? "active" : ""
                  }`}
                >
                  <span
                    onClick={() => toggleMainMenu("home")}
                    className="menu-toggle"
                  ></span>
                  <a
                    onClick={() => toggleMainMenu("home")}
                    className="dropdown-arrow"
                  >
                    Home
                  </a>
                  <SmoothCollapse
                    expanded={activeMainMenu === "home"}
                    heightTransition="1s ease"
                  >
                    <ul
                      style={{
                        display: activeMainMenu === "home" ? "block" : "none",
                      }}
                      className="sub-menu"
                    >
                      {home.map((data, index) => (
                        <li key={index}>
                          <Link to={data.href}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </SmoothCollapse>
                </li>
                <li>
                  <span
                    onClick={() => toggleMainMenu("Categories")}
                    className="menu-toggle"
                  ></span>
                  <Link to="#" onClick={() => toggleMainMenu("Categories")}>
                    Categories
                  </Link>
                  <SmoothCollapse
                    expanded={activeMainMenu === "Categories"}
                    heightTransition="1s ease"
                  >
                    <ul
                      style={{
                        display:
                          activeMainMenu === "Categories" ? "block" : "none",
                      }}
                      className="sub-menu"
                    >
                      <li className={`${activeSubMenu ? "active" : ""}`}>
                        <span
                          onClick={() => toggleSubMenu("Classic")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "Classic" ? "-" : "+"}
                        </span>
                        <a onClick={() => toggleSubMenu("Classic")} >
                          Classic Variation
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "Classic"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "Classic" ? "block" : "none",
                            }}
                            className="sub-menu"
                          >
                            {classic.map((data, index) => (
                              <li key={index}>
                                <Link to={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </SmoothCollapse>
                      </li>
                      <li>
                        <span
                          onClick={() => toggleSubMenu("Banner")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "Banner" ? "-" : "+"}
                        </span>
                        <a onClick={() => toggleSubMenu("Banner")} >
                          Classic Variation
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "Banner"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "Banner" ? "block" : "none",
                            }}
                            className="sub-menu"
                          >
                            {banner.map((data, index) => (
                              <li key={index}>
                                <Link to={data.href}>Banner {data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </SmoothCollapse>
                      </li>
                      <li>
                        <span
                          onClick={() => toggleSubMenu("Columns")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "Columns" ? "-" : "+"}
                        </span>
                        <a onClick={() => toggleSubMenu("Columns")} >
                          Columns Variation
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "Columns"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "Columns" ? "block" : "none",
                            }}
                            className="sub-menu"
                          >
                            {column.map((data, index) => (
                              <li key={index}>
                                <Link to={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </SmoothCollapse>
                      </li>
                      <li>
                        <span
                          onClick={() => toggleSubMenu("List")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "List" ? "-" : "+"}
                        </span>
                        <a onClick={() => toggleSubMenu("List")} >
                          List Variation
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "List"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "List" ? "block" : "none",
                            }}
                            className="sub-menu"
                          >
                            {list.map((data, index) => (
                              <li key={index}>
                                <Link to={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </SmoothCollapse>
                      </li>
                    </ul>
                  </SmoothCollapse>
                </li>
                <li>
                  <span
                    onClick={() => toggleMainMenu("Products")}
                    className="menu-toggle"
                  ></span>
                  <a onClick={() => toggleMainMenu("Products")} >
                    Products
                  </a>
                  <SmoothCollapse
                    expanded={activeMainMenu === "Products"}
                    heightTransition="1s ease"
                  >
                    <ul
                      style={{
                        display:
                          activeMainMenu === "Products" ? "block" : "none",
                      }}
                      className="sub-menu"
                    >
                      <li>
                        <span
                          onClick={() => toggleSubMenu("product")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "product" ? "-" : "+"}
                        </span>
                        <a onClick={() => toggleSubMenu("product")} >
                          Product page
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "product"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "product" ? "block" : "none",
                            }}
                            className="sub-menu"
                          >
                            <li>
                              <Link to="/product-left-sidebar">
                                Product left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-right-sidebar">
                                Product right sidebar
                              </Link>
                            </li>
                          </ul>
                        </SmoothCollapse>
                      </li>
                      <li>
                        <span
                          onClick={() => toggleSubMenu("productAccordion")}
                          className="menu-toggle-plus togglr-plus-rtl"
                        >
                          {activeSubMenu === "productAccordion" ? "-" : "+"}
                        </span>
                        <a
                          onClick={() => toggleSubMenu("productAccordion")}
                          
                        >
                          Product accordion
                        </a>
                        <SmoothCollapse
                          expanded={activeSubMenu === "productAccordion"}
                          heightTransition="1s ease"
                        >
                          <ul
                            style={{
                              display:
                                activeSubMenu === "productAccordion"
                                  ? "block"
                                  : "none",
                            }}
                            className="sub-menu"
                          >
                            <li>
                              <Link to="/product-according-left-sidebar">
                                left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-according-right-sidebar">
                                right sidebar
                              </Link>
                            </li>
                          </ul>
                        </SmoothCollapse>
                      </li>
                      <li>
                        <Link to="/product-full-width">Product full width</Link>
                      </li>
                      <li>
                        <Link to="/product-according-full-width">
                          accordion full width
                        </Link>
                      </li>
                    </ul>
                  </SmoothCollapse>
                </li>
                <li className="dropdown">
                  <span
                    onClick={() => toggleMainMenu("blog")}
                    className="menu-toggle"
                  ></span>
                  <a onClick={() => toggleMainMenu("blog")} >
                    Blog
                  </a>
                  <SmoothCollapse
                    expanded={activeMainMenu === "blog"}
                    heightTransition="1s ease"
                  >
                    <ul
                      style={{
                        display: activeMainMenu === "blog" ? "block" : "none",
                      }}
                      className="sub-menu"
                    >
                      {blog.map((data, index) => (
                        <li key={index}>
                          <Link to={data.href}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </SmoothCollapse>
                </li>
                <li className="dropdown">
                  <span
                    onClick={() => toggleMainMenu("pages")}
                    className="menu-toggle"
                  ></span>
                  <a onClick={() => toggleMainMenu("pages")}>
                    Pages
                  </a>
                  <SmoothCollapse
                    expanded={activeMainMenu === "pages"}
                    heightTransition="1s ease"
                  >
                    <ul
                      style={{
                        display: activeMainMenu === "pages" ? "block" : "none",
                      }}
                      className="sub-menu"
                    >
                      {pages.map((data, index) => (
                        <li key={index}>
                          <Link to={data.href}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </SmoothCollapse>
                </li>
              </ul>
            </div>
            <div className="header-res-lan-curr">
              {/* <!-- Social Start --> */}
              <div className="header-res-social">
                <div className="header-top-social">
                  <ul className="mb-0">
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="gicon gi-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="gicon gi-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="gicon gi-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="gicon gi-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Social End --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileManuSidebar;
