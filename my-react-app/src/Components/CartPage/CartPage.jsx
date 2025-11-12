import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../CartPage/CartPage.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slice/cartSlice";
import { addToWishList } from "../../Redux/Slice/wishListSlice";

function CartPage(){
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    const [show , setShow] = useState(true)

    
    const [selectedSize, setSelectedSize] = useState('');
    const [pincode, setPincode] = useState('');
    const [deliveryInfo, setDeliveryInfo] = useState(null);
    const [isLoadingDelivery, setIsLoadingDelivery] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showNotification, setShowNotification] = useState('');

    const dispatch = useDispatch();

    if (!product) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>No Product Selected</h2>
                <p>Please go back and select a product</p>
                <button 
                    onClick={() => navigate(-1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ff3f6c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Go Back
                </button>
            </div>
        );
    }

    // Calculate original price
    const originalPrice = Math.round(product.price / (1 - product.discount/100));

    // Handle size selection
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    // Handle add to bag
    const handleAddToBag = (product) => {
        if (!selectedSize) {
            showNotificationMessage('Please select a size');
            return;
        }


        dispatch(addToCart(product))

        setShow(false)
        
        showNotificationMessage('Added to bag successfully!');
    };

    const handleGoToBag = () =>{
        console.log("aand");
        
    navigate("/checkOutPage")
    }

    
    const handleWishlistToggle = () => {

        dispatch(addToWishList(product))
        
    };

    // Check delivery availability
    const checkDelivery = async () => {
        if (!pincode || pincode.length !== 6) {
            showNotificationMessage('Please enter a valid 6-digit pincode');
            return;
        }

        setIsLoadingDelivery(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock delivery data
            const mockDeliveryData = {
                available: Math.random() > 0.3, // 70% chance of availability
                estimatedDays: Math.floor(Math.random() * 5) + 2,
                codAvailable: Math.random() > 0.5
            };
            
            setDeliveryInfo(mockDeliveryData);
        } catch (error) {
            showNotificationMessage('Error checking delivery. Please try again.');
        } finally {
            setIsLoadingDelivery(false);
        }
    };

    // Show notification message
    const showNotificationMessage = (message) => {
        setShowNotification(message);
        setTimeout(() => setShowNotification(''), 3000);
    };

    

    return (
        <div className="card-container">
            {/* Notification */}
            {showNotification && (
                <div className="notification">
                    {showNotification}
                </div>
            )}

            <div className="product-detail-page">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <span 
                        className="breadcrumb-link"
                        onClick={() => navigate('/products')}
                    >
                        Home
                    </span> / 
                    <span className="breadcrumb-link"
                        onClick={() => navigate('/products')}>Men</span> / 
                    <span className="breadcrumb-link"
                        onClick={() => navigate('/products')}>Shirts</span> / 
                    <span>{product.brand}</span>
                </div>

                <div className="product-detail-container">
                    {/* Product Images Section */}
                    <div className="product-images-section">
                        
                        
                        <div className="main-image">
                            <img 
                                src={product.images} 
                                alt={product.name}
                            />
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="product-info-section">
                        <h1 className="brand-name-11">{product.brand}</h1>
                        <h2 className="product-title">{product.name}</h2>
                        
                        <div className="rating-section">
                            
                            <span className="rating-text">4.5 </span><span className="star.filled">⭐</span> | <span className="rating-number">1.2k Ratings</span>
                        </div>

                        <div className="price-section">
                            <span className="current-price-11">₹{product.price}</span>
                            <span className="original-price-11">MRP ₹{originalPrice}</span>
                            <span className="discount-percent-11">{product.discount}% OFF</span>
                            <div className="tax-info-11">inclusive of all taxes</div>
                        </div>

                        {/* Size Selection */}
                        <div className="size-section">
                            <div className="section-header">
                                <span>SELECT SIZE</span>
                                <span className="size-chart-link">SIZE CHART {">"}</span>
                            </div>
                            <div className="size-options">
                                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <div 
                                        key={size} 
                                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => handleSizeSelect(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            {!selectedSize && (
                                <div className="size-error">Please select a size</div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            {
                                show ? (<button 
                                className="add-to-bag-btn"
                                onClick={() => handleAddToBag(product)}
                            >
                                <i className="bag-icon">🛍️</i> ADD TO BAG
                            </button>)  :

                            (<button 
                                className="add-to-bag-btn"

                                onClick={() => handleGoToBag()}
                                
                            >
                             GO TO BAG {"->"}
                            </button>)
                            }
                            
                            <button 
                                className={`wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}`}
                                onClick={handleWishlistToggle}
                            >
                                <i className="heart-icon">
                                    {isInWishlist ? '❤️' : '🤍'}
                                </i> 
                                {isInWishlist ? ' IN WISHLIST' : ' WISHLIST'}
                            </button>
                        </div>

                        {/* Delivery Info */}
                        <div className="delivery-info">
                            <div className="delivery-option">
                                <span className="icon">🚚</span>
                                <div>
                                    <strong>Delivery Options</strong>
                                    <div className="pincode-checker">
                                        <input 
                                            type="text" 
                                            placeholder="Enter pincode"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                                            maxLength="6"
                                            className="pincode-checker"
                                        />
                                        <button 
                                            onClick={checkDelivery}
                                            disabled={isLoadingDelivery}
                                        >
                                            {isLoadingDelivery ? 'Checking...' : 'Check'}
                                        </button>
                                    </div>
                                    {deliveryInfo && (
                                        <div className="delivery-result">
                                            {deliveryInfo.available ? (
                                                <div>
                                                    <span style={{color: 'green'}}>
                                                        ✓ Delivery in {deliveryInfo.estimatedDays} days
                                                    </span>
                                                    {deliveryInfo.codAvailable && (
                                                        <div style={{color: 'green', fontSize: '12px'}}>
                                                            COD available
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span style={{color: 'red'}}>
                                                    ✗ Delivery not available for this pincode
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="delivery-option">
                                <span className="icon">↩️</span>
                                <div>
                                    <strong>Return & Exchange</strong>
                                    <div>Easy 14 days return and exchange</div>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-description">
                            <h3>Product Details</h3>
                            <ul>
                                <li>100% Premium Cotton for superior comfort and breathability</li>
                                <li>Regular fit for a comfortable, casual look</li>
                                <li>Machine washable for easy care</li>
                                <li>Spread collar for a classic style</li>
                                <li>Available in multiple colors</li>
                                <li>Brand: {product.brand}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;



