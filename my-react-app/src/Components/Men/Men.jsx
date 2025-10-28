import React from "react";
import "./Men.css";

const Men = ({isOpened}) => {
  debugger
  return (
    <>
      {isOpened ? (
        <div className="dropdown-menu">
          {/* Column 1 */}
          <div className="dropdown-column">
            <h4>Topwear</h4>
            <ul>
              <li>T-Shirts</li>
              <li>Casual Shirts</li>
              <li>Formal Shirts</li>
              <li>Sweatshirts</li>
              <li>Sweaters</li>
              <li>Jackets</li>
              <li>Blazers & Coats</li>
              <li>Suits</li>
              <li>Rain Jackets</li>
            </ul>
            <h4>Indian & Festive Wear</h4>
            <ul>
              <li>Kurtas & Kurta Sets</li>
              <li>Sherwanis</li>
              <li>Nehru Jackets</li>
              <li>Dhotis</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="dropdown-column">
            <h4>Bottomwear</h4>
            <ul>
              <li>Jeans</li>
              <li>Casual Trousers</li>
              <li>Formal Trousers</li>
              <li>Shorts</li>
              <li>Track Pants & Joggers</li>
            </ul>
            <h4>Innerwear & Sleepwear</h4>
            <ul>
              <li>Briefs & Trunks</li>
              <li>Boxers</li>
              <li>Vests</li>
              <li>Sleepwear & Loungewear</li>
              <li>Thermals</li>
            </ul>
            <h4>Plus Size</h4>
          </div>

          {/* Column 3 */}
          <div className="dropdown-column">
            <h4>Footwear</h4>
            <ul>
              <li>Casual Shoes</li>
              <li>Sports Shoes</li>
              <li>Formal Shoes</li>
              <li>Sneakers</li>
              <li>Sandals & Floaters</li>
              <li>Flip Flops</li>
              <li>Socks</li>
            </ul>
            <h4>Personal Care & Grooming</h4>
            <h4>Sunglasses & Frames</h4>
            <h4>Watches</h4>
          </div>

          {/* Column 4 */}
          <div className="dropdown-column">
            <h4>Sports & Active Wear</h4>
            <ul>
              <li>Sports Shoes</li>
              <li>Sports Sandals</li>
              <li>Active T-Shirts</li>
              <li>Track Pants & Shorts</li>
              <li>Tracksuits</li>
              <li>Jackets & Sweatshirts</li>
              <li>Sports Accessories</li>
              <li>Swimwear</li>
            </ul>
            <h4>Gadgets</h4>
            <ul>
              <li>Smart Wearables</li>
              <li>Fitness Gadgets</li>
              <li>Headphones</li>
              <li>Speakers</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="dropdown-column">
            <h4>Fashion Accessories</h4>
            <ul>
              <li>Wallets</li>
              <li>Belts</li>
              <li>Perfumes & Body Mists</li>
              <li>Trimmers</li>
              <li>Deodorants</li>
              <li>Ties, Cufflinks & Pocket Squares</li>
              <li>Accessory Gift Sets</li>
              <li>Caps & Hats</li>
              <li>Mufflers, Scarves & Gloves</li>
              <li>Phone Cases</li>
              <li>Rings & Wristwear</li>
              <li>Helmets</li>
            </ul>
            <h4>Bags & Backpacks</h4>
            <h4>Luggages & Trolleys</h4>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Men;
