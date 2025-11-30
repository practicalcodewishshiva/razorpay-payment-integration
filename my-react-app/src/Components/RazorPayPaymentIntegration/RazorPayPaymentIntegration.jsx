import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../Redux/Slice/cartSlice';
import { useDispatch } from 'react-redux';

const RazorPayPaymentIntegration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allCart);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Check if Razorpay script is loaded
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max wait time (50 * 100ms)
    
    const checkRazorpay = () => {
      if (window.Razorpay) {
        setRazorpayLoaded(true);
        console.log('✅ Razorpay SDK loaded successfully');
        return;
      }
      
      retryCount++;
      if (retryCount < maxRetries) {
        setTimeout(checkRazorpay, 100);
      } else {
        console.error('❌ Razorpay SDK failed to load after maximum retries');
        alert('⚠️ Payment gateway failed to load. Please check your internet connection and refresh the page.');
      }
    };
    checkRazorpay();
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      alert('Your cart is empty. Redirecting to checkout...');
      navigate('/checkOutPage');
    }
  }, [cart, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (must start with 6-9 and be 10 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    initiatePayment();
  };

  // Razorpay Payment Integration
  const initiatePayment = () => {
    console.log('💳 Initiating payment...');

    if (!window.Razorpay) {
      console.error('❌ Razorpay SDK not loaded');
      alert('⚠️ Payment gateway not loaded. Please refresh the page.');
      setLoading(false);
      return;
    }

    // Validate amount
    if (!totalPrice || totalPrice <= 0) {
      alert('⚠️ Invalid amount. Please check your cart.');
      setLoading(false);
      return;
    }

    // Calculate total amount in paise (₹1 = 100 paise)
    const amountInPaise = Math.round(totalPrice * 100);
    
    // Minimum amount check (Razorpay minimum is 1 INR = 100 paise)
    if (amountInPaise < 100) {
      alert('⚠️ Minimum order amount is ₹1. Please add more items to your cart.');
      setLoading(false);
      return;
    }

    // Razorpay configuration options
    // Using TEST key for testing - Replace with LIVE key for production
    // NOTE: For test mode, don't pass order_id - Razorpay will create it automatically
    const options = {
      key: 'rzp_test_RlnvGpRj7SLACw', // Your Razorpay TEST key
      amount: amountInPaise,
      currency: 'INR',
      name: 'Myntra',
      description: `Order for ${totalQuantity} item(s)`,
      image: 'https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1871-410c-b126-3141630c08d51550685418928-myntra.png',
      // Don't pass order_id for test mode - Razorpay creates it automatically
      
      // Pre-fill customer details
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      
      // Notes - additional info
      notes: {
        order_items: cart.length.toString(),
        total_items: totalQuantity.toString()
      },
      
      // Theme customization
      theme: {
        color: '#ff3f6c' // Myntra brand color
      },
      
      // Success handler
      handler: function(response) {
        console.log('✅ Payment Success!');
        console.log('Payment Response:', response);
        
        setLoading(false);
        
        // Clear cart after successful payment
        dispatch(clearCart());
        
        // Show success message and redirect
        alert(`Payment Successful!\n\nPayment ID: ${response.razorpay_payment_id}\nOrder ID: ${response.razorpay_order_id || 'N/A'}\n\nThank you for your purchase!`);
        
        // Redirect to home or main page
        navigate('/mainpage');
      },
      
      // Modal dismiss handler
      modal: {
        ondismiss: function() {
          console.log('❌ Payment cancelled by user');
          setLoading(false);
          // Don't show alert on dismiss, just reset loading state
        }
      }
    };

    console.log('Razorpay Options:', options);
    console.log('Amount in Paise:', amountInPaise);
    console.log('Amount in INR:', totalPrice);

    try {
      // Create Razorpay instance
      const razorpay = new window.Razorpay(options);

      // Handle payment failure
      razorpay.on('payment.failed', function(response) {
        console.error('❌ Payment Failed!');
        console.error('Error Response:', response);
        console.error('Error Code:', response.error?.code);
        console.error('Error Description:', response.error?.description);
        console.error('Error Source:', response.error?.source);
        console.error('Error Step:', response.error?.step);
        console.error('Error Reason:', response.error?.reason);
        
        setLoading(false);
        
        const errorMessage = response.error?.description || response.error?.reason || 'Payment failed. Please try again.';
        alert(`Payment Failed!\n\n${errorMessage}\n\nError Code: ${response.error?.code || 'N/A'}\n\nPlease check your payment details and try again.`);
      });

      // Handle other errors
      razorpay.on('error', function(error) {
        console.error('❌ Razorpay Error:', error);
        setLoading(false);
        alert('An error occurred: ' + (error.error?.description || error.message || 'Unknown error'));
      });

      // Open Razorpay payment modal
      console.log('🚀 Opening Razorpay modal...');
      razorpay.open();
    } catch (error) {
      console.error('❌ Error creating Razorpay instance:', error);
      setLoading(false);
      alert('Failed to initialize payment. Please refresh the page and try again.\n\nError: ' + error.message);
    }
  };

  if (cart.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ color: '#ff3f6c', marginBottom: '10px' }}>Complete Your Payment</h1>
          <p style={{ color: '#666' }}>Order Total: ₹{totalPrice.toLocaleString()}</p>
          <p style={{ color: '#666', fontSize: '14px' }}>{totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}</p>
        </div>

        {/* Order Summary */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>Order Summary</h3>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: index < cart.length - 1 ? '1px solid #eee' : 'none'
            }}>
              <span style={{ fontSize: '14px' }}>{item.name} (Qty: {item.quantity})</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>₹{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            paddingTop: '10px',
            borderTop: '2px solid #ddd',
            fontWeight: 'bold'
          }}>
            <span>Total Amount:</span>
            <span style={{ color: '#ff3f6c', fontSize: '18px' }}>₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Customer Details</h3>

          {/* Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Full Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '12px',
                border: errors.name ? '2px solid red' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
              disabled={loading}
            />
            {errors.name && (
              <span style={{ color: 'red', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                ⚠️ {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Email Address <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '12px',
                border: errors.email ? '2px solid red' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
              disabled={loading}
            />
            {errors.email && (
              <span style={{ color: 'red', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Phone Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength="10"
              style={{
                width: '100%',
                padding: '12px',
                border: errors.phone ? '2px solid red' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
              disabled={loading}
            />
            {errors.phone && (
              <span style={{ color: 'red', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                ⚠️ {errors.phone}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !razorpayLoaded}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: loading || !razorpayLoaded ? '#ccc' : '#ff3f6c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading || !razorpayLoaded ? 'not-allowed' : 'pointer',
              marginBottom: '15px'
            }}
          >
            {loading ? (
              'Processing...'
            ) : !razorpayLoaded ? (
              '⏳ Loading Payment Gateway...'
            ) : (
              `💳 Pay ₹${totalPrice.toLocaleString()}`
            )}
          </button>

          {/* Security Note */}
          <div style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#666',
            marginTop: '15px'
          }}>
            <p>🔒 Your payment is secured by Razorpay with 256-bit encryption</p>
          </div>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate('/checkOutPage')}
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'transparent',
            color: '#ff3f6c',
            border: '1px solid #ff3f6c',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '15px'
          }}
        >
          ← Back to Cart
        </button>
      </div>
    </div>
  );
};

export default RazorPayPaymentIntegration;
