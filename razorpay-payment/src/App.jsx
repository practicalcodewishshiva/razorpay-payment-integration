import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // 3 rd way

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function verifyRazorpayPayment(money) {
    // step 1 script load
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    // if inase repsionse rakapithe

    if (!response) {
      alert("Razorpay sdk failed to load ");
      return;
    }
    const data = await axios.post("http://localhost:5001/create-order", {
      amount: money,
    });

    console.log("data", data.data.order);

    const { amount, id, currency } = data.data.order;

    const options = {
      key: "rzp_test_RlnvGpRj7SLACw",
      amount: amount,
      currency: currency,
      name: "shiva Kumar",
      descption: "New Cohort",
      order_id: id,
    },
    handler = function (response) {
      alert(response);
    }

    // modal openup avvlai kadha
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  }
  return (
    <>
      intialise page render
      <button onClick={() => verifyRazorpayPayment(15000)}>
        {" "}
        Verify and Pay
      </button>
    </>
  );
}

export default App;

// Step 1: Dynamic Script Loader

// Step 2: Main Payment Function

// Step 3: Backend Call

// Step 4: Razorpay Options (Critical Part)
