import React from "react";
import { Link } from "react-router-dom";

const TopRate = ({ data }: any) => {
  return (
    <>
      <div className="col-sm-12 gi-all-product-block">
        <div className="gi-all-product-inner">
          <div className="gi-pro-image-outer">
            <div className="gi-pro-image">
              <Link to={`/product-left-sidebar`} className="image">
                <img className="main-image" src={data.image} alt="Product" />
              </Link>
            </div>
          </div>
          <div className="gi-pro-content">
            <h5 className="gi-pro-title">
              <Link to={`/product-left-sidebar`}>{data.title}</Link>
            </h5>
            <h6 className="gi-pro-stitle">
              <Link to={`/shop-left-sidebar-col-3`}>{data.name}</Link>
            </h6>
            <div className="gi-pro-rat-price">
              <div className="gi-pro-rat-pri-inner">
                <span className="gi-price">
                  <span className="new-price">${data.newPrice}</span>
                  <span className="old-price">${data.oldPrice}</span>
                  <span className="qty">- {data.waight}</span>
                </span>
              </div>
            </div>
            <a href="" className="add-to-cart" title="Add To Cart">
              <i className="fi-rr-shopping-basket"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRate;
