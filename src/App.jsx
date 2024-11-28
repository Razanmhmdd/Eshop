import BannerGrid from "./Components/Banners/Banner";
import HeroSection from "./Components/Hero/Hero";
import LaptopComponent from "./Components/LaptopComponent/LaptopComponent";
import NavbarTopBar from "./Components/Navbar/Navbar";
import CardGridView from "./Components/ProductShowcase/Cardslider";
import ProductShowcase from "./Components/ProductShowcase/ProductShowcase";
import Watch from "./Components/LaptopComponent/watch";
import Features from "./Components/Features/Features";
import FeatureIconLeftSquareIconText from "./Components/Features/Features";
import FooterPrimaryLightTheme from "./Components/Footer/Footer";
import FooterFiveColsLogo from "./Components/Footer/Footer";
import FooterFiveColsLogoSubFooter from "./Components/Footer/Footer";
export default function App() {
  return (
    <div>
      <NavbarTopBar/>
      <HeroSection/>
      <LaptopComponent/>
      <BannerGrid/>
      {/* <ProductShowcase/> */}
      <CardGridView/>
      <Watch/>
      <FeatureIconLeftSquareIconText/>
     <FooterFiveColsLogoSubFooter/>
    </div>
  )
}