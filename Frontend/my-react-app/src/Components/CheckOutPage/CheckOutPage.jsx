import React, { useEffect } from "react";
import "./CheckOutPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "../../Redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const totalMRP = cart.reduce((total, item) => {
    const originalPrice = Math.round(item.price / (1 - item.discount / 100));
    return total + originalPrice * item.quantity;
  }, 0);

  const discountOnMRP = totalMRP - totalPrice;

  const platformFee = 0; 

  const totalAmount = totalPrice + platformFee;

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  function razorPayOrder() {
    console.log("hello clicked");
    navigate("/payment");
  }

  return (
    <div className="cart-container">
      <div className="cart-left">
        <div className="delivery-check">
          <p>Check delivery time & services</p>
          <button className="btn-outline">ENTER PIN CODE</button>
        </div>

        <div className="offers-box">
          <h4>Available Offers</h4>
          <p>
            • 10% Instant Discount on PNB Credit Card on a min spend of ₹3,000.
          </p>
          <span className="show-more">Show More</span>
        </div>

        {/* Selected Items Header */}
        <div className="items-header">
          <div>
            <input type="checkbox" checked readOnly />{" "}
            <span>
              {cart.length}/{cart.length} ITEMS SELECTED
            </span>
          </div>
          <div className="item-actions">
            <span onClick={() => dispatch(clearCart())}>REMOVE</span>
            <span>MOVE TO WISHLIST</span>
          </div>
        </div>

        {/* Item Cards */}
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${item.selectedSize}-${index}`}
            className="item-card"
          >
            <div className="item-left">
              <input type="checkbox" checked readOnly className="item-check" />
              <img src={item.images} alt="product" />
            </div>
            <div className="item-details">
              <h5>{item.brand}</h5>
              <p>{item.name}</p>

              <div className="item-meta">
                <div>
                  <span className="label">Size:</span>{" "}
                  {item.selectedSize || "L"}
                </div>
                <div className="quantity-button-container">
                  <button
                    className="quantity-button"
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="label">Qty:</span> {item.quantity}
                  <button
                    className="quantity-button"
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="price-row-11">
                <div>
                  <span className="discounted">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
                <div>
                  <span className="original">
                    ₹
                    {Math.round(item.price / (1 - item.discount / 100)) *
                      item.quantity}
                  </span>
                </div>
                <div>
                  <span className="off">{item.discount}% OFF</span>
                </div>
              </div>

              <p className="return-info">7 days return available</p>
            </div>
            <div className="item-remove-container">
              <span className="close" onClick={() => dispatch(removeItem(item.id))}>
                &#10005;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== RIGHT SECTION ===== */}
      <div className="cart-right">
        {/* Coupons */}
        <div className="coupon-box">
          <h4>Apply Coupons</h4>
          <button className="btn-outline-1">APPLY</button>
        </div>

        {/* Donation */}
        <div className="donate-box">
          <input type="checkbox" id="donate" />
          <label htmlFor="donate">Donate and make a difference</label>
          <div className="donate-options">
            <button>₹10</button>
            <button>₹20</button>
            <button>₹50</button>
            <button>₹100</button>
          </div>
          <span className="know-more">Know More</span>
        </div>

        {/* Price Details */}
        <div className="price-details">
          <h4>
            PRICE DETAILS ({totalQuantity}{" "}
            {totalQuantity === 1 ? "Item" : "Items"})
          </h4>
          <div className="price-row">
            <span>Total MRP</span>
            <span>₹{totalMRP.toLocaleString()}</span>
          </div>
          <div className="price-row">
            <span>Discount on MRP</span>
            <span className="discount">-₹{discountOnMRP.toLocaleString()}</span>
          </div>
          <div className="price-row">
            <span>Coupon Discount</span>
            <span className="apply-coupon">Apply Coupon</span>
          </div>
          <div className="price-row">
            <span>Platform Fee</span>
            <span className="free">FREE</span>
          </div>
          <div className="price-total">
            <span>Total Amount</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>
          <button className="btn-primary" onClick={razorPayOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
