const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// step 5

const razorPayInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

console.log("Razrpay instance");
console.log("keyid ", process.env.KEY_ID);

// https://services-in.bookmyshow.com/payments/v1/orders/payment-init
// frontend requ backendreonse frontend
app.post("/create-order", async (req, res) => {
  // frontned 200 or 400 req.body
  try {
    const { amount } = req.body;

    const paymentAmount = amount || 400;

    const options = {
      amount: paymentAmount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now}`,
      payment_capture: 1,
    };

    const order = await razorPayInstance.orders.create(options);
    console.log("order created succesfully", order.id);

    res.status(200).json({
      success: true,
      order: order,
      key: process.env.KEY_ID,
    });
  } catch (error) {
    console.error("error creating order", error);
    res.status(500).json({
      success: false,
      message: "failed to create order",
      error: error.message,
    });
  }

  //   FAIL  TRY CATCH
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("server started on port", PORT);
});
