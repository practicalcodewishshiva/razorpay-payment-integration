import React from 'react'
import './Header.css';

function Header() {

    return (
        <div className='header'>
            <div className='navbar1'>
                <div className='logo'></div>
                <div className='nav'>
                    <div className='nav_items nav_item_men'>
                        <span>MEN</span>
                    </div>
                    <div className='nav_items nav_item_women'>
                        <span>WOMEN</span>
                    </div>
                    <div className='nav_items nav_item_kids' >
                        <span>KIDS</span>
                    </div>
                    <div className='nav_items nav_item_home'>
                        <span>HOME LIVING</span>
                    </div>
                    <div className='nav_items nav_item_studio'>
                        <span>STUDIO</span>
                    </div>
                </div>
            </div>
            <div className='header_nav'>
                <div className='header_search'>
                    <input
                        type='text'
                        placeholder='Search for products, branch and more'
                    />
                    <i className='search_icon'></i>
                </div>
                <div className='header_items'>
                    <div className='header_item' >
                        <i className='heart_icon'></i>
                        <span>Wishlist</span>
                    </div>
                    <div className='header_item'>
                        <i className='cart_icon'></i>
                        <span>Bag</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header