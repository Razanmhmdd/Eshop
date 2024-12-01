import React from 'react'
import BannerGrid from "../Components/Banners/Banner";
import HeroSection from "../Components/Hero/Hero";
import LaptopComponent from "../Components/LaptopComponent/LaptopComponent";
import NavbarTopBar from "../Components/Navbar/Navbar";
import CardGridView from "../Components/ProductShowcase/Cardslider";
import Watch from "../Components/LaptopComponent/watch";
import FeatureIconLeftSquareIconText from "../Components/Features/Features";
import FooterFiveColsLogoSubFooter from "../Components/Footer/Footer";
import RecentNews from "../Components/Hero/LandingPage";
import Footer from '../Components/Footer/Footer';
import Newsletter from '../Components/Newsletter/Newsletter';
export default function Home() {
  return (
    <div>
      <NavbarTopBar/>
      <HeroSection/>
      <LaptopComponent/>
      <BannerGrid/>
      <CardGridView/>
      <Watch/>
      <FeatureIconLeftSquareIconText/>
      <Newsletter/>
      <RecentNews/>
     <Footer/>
    
    </div>
  )
}