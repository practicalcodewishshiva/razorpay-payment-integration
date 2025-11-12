import React, { useState } from "react";
import "./Address.css";
import {useSelector } from "react-redux";

function Address({ onSave }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pin: "",
    house: "",
    address: "",
    locality: "",
    city: "",
    state: "",
    addressType: "Home",
    defaultAddress: false,
  });
   const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

   const totalMRP = cart.reduce((total, item) => {
        const originalPrice = Math.round(item.price / (1 - item.discount / 100));
        return total + (originalPrice * item.quantity);
    }, 0);
    
    // Calculate discount on MRP
    const discountOnMRP = totalMRP - totalPrice;
    
    // Calculate platform fee (you can modify this logic as needed)
    const platformFee = 0; // Currently FREE as per your design
    
    // Calculate final total amount
    const totalAmount = totalPrice + platformFee;


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCancel = () => {
    setForm({
      name: "",
      mobile: "",
      pin: "",
      house: "",
      address: "",
      locality: "",
      city: "",
      state: "",
      addressType: "Home",
      defaultAddress: false,
    });
  };

  const handleSave = () => {
    const requiredFields = [
      "name",
      "mobile",
      "pin",
      "house",
      "address",
      "locality",
      "city",
      "state",
    ];
    for (const field of requiredFields) {
      if (!form[field]) {
        alert("Please fill all required fields.");
        return;
      }
    }

    if (form.mobile.length !== 10) {
      alert("Mobile number must be 10 digits.");
      return;
    }

    const payload = {
      ...form,
      priceDetails: {
        mrp,
        discount,
        platformFee,
        totalAmount,
      },
    };

    if (onSave) onSave(payload);
    alert("Address saved successfully!");
  };

  return (
    <>
    <div className="address-container">
      <div className="form-section">
        <h3 className="section-title">CONTACT DETAILS</h3>

        <input
          className="input"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="input"
          name="mobile"
          placeholder="Mobile No*"
          value={form.mobile}
          onChange={handleChange}
        />

        <h3 className="section-title">ADDRESS</h3>

        <input
          className="input"
          name="pin"
          placeholder="Pin Code*"
          value={form.pin}
          onChange={handleChange}
        />
        <input
          className="input"
          name="house"
          placeholder="House Number/Tower/Block*"
          value={form.house}
          onChange={handleChange}
        />
        <div className="note">*House Number will allow a doorstep delivery</div>

        <input
          className="input"
          name="address"
          placeholder="Address (locality, building, street)*"
          value={form.address}
          onChange={handleChange}
        />
        <div className="note">*Please update society/apartment details</div>

        <input
          className="input"
          name="locality"
          placeholder="Locality / Town*"
          value={form.locality}
          onChange={handleChange}
        />

        <div className="row">
          <input
            className="input half"
            name="city"
            placeholder="City / District*"
            value={form.city}
            onChange={handleChange}
          />
          <input
            className="input half"
            name="state"
            placeholder="State*"
            value={form.state}
            onChange={handleChange}
          />
        </div>

        {/* ✅ ADDRESS TYPE */}
        <div className="section-title">ADDRESS TYPE</div>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="addressType"
              value="Home"
              checked={form.addressType === "Home"}
              onChange={handleChange}
            />
            <span className="radio-text">Home</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="addressType"
              value="Office"
              checked={form.addressType === "Office"}
              onChange={handleChange}
            />
            <span className="radio-text">Office</span>
          </label>
        </div>

        {/* ✅ DEFAULT ADDRESS CHECKBOX */}
        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              name="defaultAddress"
              checked={form.defaultAddress}
              onChange={handleChange}
            />
            <span className="checkbox-text">
              Make this as my default address
            </span>
          </label>
        </div>

        {/* ✅ BUTTONS */}
        
      </div>

      {/* RIGHT PRICE DETAILS SIDE */}
      <div className="price-section">
        <h3 className="section-title">PRICE DETAILS (Item)</h3>

        <div className="price-row">
          <span>Total MRP</span>
          <span>₹{totalMRP }</span>
        </div>

        <div className="price-row discount">
          <div> <span className="disc-1">Discount on MRP</span></div>
          <div> <span>- ₹{discountOnMRP}</span></div>
        </div>

        <div className="price-row">
          <span>Platform Fee</span>
          <span>{platformFee === 0 ? "FREE" : `₹${platformFee}`}</span>
        </div>

        <hr />

        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>
    </div>
    <div className="button-row-1">
          <button className="cancel-btn-1" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-btn-1" onClick={handleSave}>
            Save
          </button>
        </div>
        </>
  );
}

export default Address;
