import React from 'react'
import Footercss from './Footer.module.css'
import { MdLanguage } from "react-icons/md"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
function Footer() {
    return (
        <div className={Footercss.Header}>
            <button className={Footercss.hello}>
                <h3>Back to top</h3>
            </button>
            <div className={Footercss.footer__kotta}>

          
            <div className={Footercss.kotta}>
                <ul>
                   <h2>Get to Know Us</h2>
                   <li>Careers</li>
                   <li>Blog</li>
                   <li>About Amazon</li>
                   <li>Investor Relations</li>
                   <li>Amazon Devices</li>
                </ul> 
                <ul>
                   <h2>Make Money with Us</h2>
                   <li>Sell products on Amazon</li>
                   <li>Sell on Amazon Business</li>
                   <li>Sell apps on Amazon</li>
                   <li>Become an Affiliate</li>
                   <li>Advertise Your Products</li>
                   <li>Self-Publish with Us</li>
                   <li>Host an Amazon Hub</li>
                   <li>›See More Make Money <p></p> 
                   with Us</li>
                </ul> 
                <ul>
                   <h2>Amazon Payment Products</h2>
                   <li>Amazon Business Card</li>
                   <li>Shop with Points</li>
                   <li>Reload Your Balance</li>
                   <li>Amazon Currency Converter</li>
                </ul> 
                <ul>
                   <h2>Let Us Help You</h2>
                   <li>Amazon and COVID- <p></p> 
                   19</li>
                   <li>Your Account</li>
                   <li>Your Orders</li>
                   <li>Shipping Rates & <p></p>
                    Policies</li>
                    <li>Returns & <p></p>
                     Replacements</li>
                     <li>Manage Your <p></p> 
                     Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul> 
            </div>
            <div className={Footercss.footer__line}></div>
            <div className={Footercss.footer__logo}>
                <img src=" " alt="" />
                <button className={Footercss.btn1}> <MdLanguage/> <h4>Engilish</h4> <span> <FiChevronUp/> <FiChevronDown/> </span> 
                <div className={Footercss.kottadive}></div>

                  </button>
                <button className={Footercss.btn1}> $ <h4>USD-U.S.Dollar</h4>  </button>
                <button className={Footercss.btn1}> <img src="data:image/png;base64,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" alt="" /> <h4>Unidet States</h4></button>
            </div>
            </div>

            <div className={Footercss.kottasi}>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Sell on <p></p>
                            Amazon
                            </h5>
                             <li>Start a Selling <p></p>
                             Account</li>
                            </ul>   
                            <ul>
                                <h5>Book <p></p> 
                                Depository </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Amazon<p></p>
                            Business
                            </h5>
                             <li><p></p>
                             Everything For <p></p> 
                             Your Business</li>
                            </ul>   
                            <ul>

                                <h5>  Box Office Mojo </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Sell on <p></p>
                            Amazon
                            </h5>
                             <li>Start a Selling <p></p>
                             Account</li>
                            </ul>   
                            <ul>
                                <h5>Book <p></p> 
                                Depository </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Sell on <p></p>
                            Amazon
                            </h5>
                             <li>Start a Selling <p></p>
                             Account</li>
                            </ul>   
                            <ul>
                                <h5>Book <p></p> 
                                Depository </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Sell on <p></p>
                            Amazon
                            </h5>
                             <li>Start a Selling <p></p>
                             Account</li>
                            </ul>   
                            <ul>
                                <h5>Book <p></p> 
                                Depository </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
                <div className={Footercss.birinchisi}>
                    <ul>
                        <h5>Amazon Musi</h5>
                        <li>Stream millions <p></p>
                        of songs</li>
                        </ul>   
                        <ul>
                            <h5>Sell on <p></p>
                            Amazon
                            </h5>
                             <li>Start a Selling <p></p>
                             Account</li>
                            </ul>   
                            <ul>
                                <h5>Book <p></p> 
                                Depository </h5>
                                </ul>   
                                <ul>
                                    <h5>IMDb</h5>
                                    <p>
                                        Movies, Tv <p></p>
                                        & Celebrities
                                    </p>
                                    </ul>     
                                    <ul>
                                        <h5>Ring</h5>
                                        <li>Smart Hoome</li>
                                        <li>Security</li>
                                        <li>Systems</li>
                                    </ul>
                </div>
          <h5 className={Footercss.oxirih2}> Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
            </div>
        </div>
    )
}

export default Footer
 