import React from 'react'
import "./Home.css"
import Header from '../../Components/header/Header'
import HeaderBottom from '../../Components/HeaderBottom/HeaderBottom'
import Banner from '../../Components/banner/Banner'
import ProductWrapper from '../../Components/product-wrapper/ProductWrapper'
import Footer from '../Footer/Footer'
function Home() {
    return (
        <div>
        <Header/>
        <HeaderBottom/>
        <Banner/>
        <ProductWrapper/>
        <Footer/>
        </div>
    )
}

export default Home
