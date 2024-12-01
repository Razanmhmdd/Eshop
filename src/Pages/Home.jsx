import React from 'react'
import BannerGrid from "../Components/Banners/Banner";
import HeroSection from "../Components/Hero/Hero";
import LaptopComponent from "../Components/LaptopComponent/LaptopComponent";
import NavbarTopBar from "../Components/Navbar/Navbar";
import Watch from "../Components/LaptopComponent/watch";
import FeatureIconLeftSquareIconText from "../Components/Features/Features";
import RecentNews from "../Components/Hero/LandingPage";
import Footer from '../Components/Footer/Footer';
import Newsletter from '../Components/Newsletter/Newsletter';
import ProductShowcase from '../Components/ProductShowcase/ProductShowcase';
export default function Home() {
  return (
    <div>
      <NavbarTopBar/>
      <HeroSection/>
      <LaptopComponent/>
      <BannerGrid/>
      <Watch/>
      <ProductShowcase/>
      <FeatureIconLeftSquareIconText/>
      <Newsletter/>
      <RecentNews/>
     <Footer/>
    
    </div>
  )
}