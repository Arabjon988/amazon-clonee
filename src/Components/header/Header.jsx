import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'

function Header() {
    const [openInput, setOpenInput] = useState(false)
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" className="logo__img" />
            </div>
            <div className="header__delivery">
                <div className="delivery__icon">
                    <img src="https://icon-library.com/images/position-icon/position-icon-2.jpg" alt="" />
                </div>
                <div className="delivery__info">
                    <p>Delivery to</p>
                    <h5>Uzbekistan</h5>
                </div>
            </div>
            <div style={openInput ? { border: "4px solid #FF9900" } : { border: "4px solid transparent" }} className="search__bar">
                <select>
                    <option value="all">All</option>
                    <option value="all">Compuyters</option>
                    <option value="all">Phones</option>
                    <option value="all">Clothes</option>
                </select>
                <input onFocus={() => setOpenInput(true)} onBlur={() => setOpenInput(false)} type="text" placeholder="" />
                <button><AiOutlineSearch /></button>
            </div>
            <div className="language">
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <AiFillCaretDown />
                <div className="language__select"></div>
            </div>
            <div className="hellosigin">
                <p>Hello, Account </p> <h4>Sign in  & List  <AiFillCaretDown /></h4>

            </div>
            <div className="orders">
                <p>Returns</p>
                <h4>& Orders</h4>
            </div>
            <Link to="/cart">  <div className="card">
                <p className="absolute">0</p>
              <FiShoppingCart /> 
                <p className="card__text">Cart</p>
            </div></Link>
            <Link to="/login">
                Login Page
            </Link>
            <Link to="/signin">
                Sign In Page
            </Link>

        </div>
    )
}

export default Header


// <div className="helloguys">
//                     <div className="lists">
//                         <h3>Your Lists</h3>
//                         <p>Create a List</p>
//                         <p>Find a List or Registry</p>
//                         <p>AmazonSmile Charity Lists</p>
//                     </div>
//                     <div className="account">
//                         <h3>Your Accounts</h3>
//                         <p>Account</p>
//                         <p>Orders</p>
//                         <p>Recommendations</p>
//                         <p>Browsing History</p>
//                         <p>Watchlist</p>
//                         <p>Video Purchases & Rentals</p>
//                         <p>Kindle Unlimited</p>
//                         <p>Contect & Devices</p>
//                         <p>Subscribe & Save Items</p>
//                         <p>Memberships & Subscriptions</p>
//                         <p>Music Library</p>
//                         <p>Switch Accounts</p>
//                         <p>Sing out</p>
//                     </div>