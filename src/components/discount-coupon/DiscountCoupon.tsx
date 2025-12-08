import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { motion, AnimatePresence } from "framer-motion";

const DiscountCoupon = ({ onDiscountApplied }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    onDiscountApplied(discount);
  },[onDiscountApplied, discount]);

  const toggleCoupon = () => {
    setIsVisible(prev => !prev);
  };

  const handleApplyDiscount = () => {
    if (couponCode === "") {
      setErrorMessage("Coupon code cannot be empty");
      setDiscount(0);
    } else if (couponCode === "SAVE10") {
      setDiscount(10); // 10% discount
      setErrorMessage("");
      setIsBtnVisible(false);
    } else if (couponCode === "SAVE20") {
      setDiscount(20); // 10% discount
      setErrorMessage("");
      setIsBtnVisible(false);
    } else {
      setDiscount(0); // No discount
      setErrorMessage("Discount Coupon can not exceed");
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setDiscount(0);
    setIsVisible(false);
    setIsBtnVisible(true);
    setErrorMessage("");
  };

  return (
    <>
      <div>
          <span className="text-left">Coupan Discount</span>
          <span className="text-right"><a className="gi-cart-coupan" onClick={toggleCoupon}>Apply Coupan</a></span>
      </div>

      <AnimatePresence>
        {(isVisible && isBtnVisible) && (
          <motion.div className="gi-cart-coupan-content d-block" 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form className="gi-cart-coupan-form" name="gi-cart-coupan-form" method="post" action="#">
                <input className="gi-coupan" type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} required placeholder="Enter Your Coupan Code" name="gi-coupan" />
                <button className="gi-btn-2" type="button" name="apply" onClick={handleApplyDiscount}>Apply</button>
            </form>
          </motion.div>
        )}
        {!isBtnVisible && (
          <motion.span style={{ position: "relative" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge bg="secondary">
              {couponCode}
              <a onClick={handleRemoveCoupon}
                style={{
                  color: "white",
                  paddingLeft: "5px",
                  fontSize: "12px",
                }}
                className="gi-select-cancel"
              >×</a>
            </Badge>
          </motion.span>
        )}
      </AnimatePresence>

      {errorMessage && (
        <div className="invalid-feedback">{errorMessage}</div>
      )}
      {discount > 0 && discount <= 100 && (
        <div className="valid-feedback">
          Discount applied! You get a {discount}% discount.
        </div>
      )}
      {discount > 100 && (
        <div className="invalid-feedback">
          Discount Coupon can not exceed.
        </div>
      )}
    </>
  );
};

export default DiscountCoupon;
