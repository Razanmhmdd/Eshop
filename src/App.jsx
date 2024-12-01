import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NavbarTopBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Example from './Pages/Products';
import ProductInfo from './Components/ProductShowcase/ProductInfo';
const PageComponent = ({Page}) => {
  return (
    <>
      <NavbarTopBar/>
      <Page />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<PageComponent Page={Contact} />} />
          <Route path="/product" element={<PageComponent Page={Example} />} />
          <Route path="/about" element={<PageComponent Page={About} />} />
          <Route path="/info" element={<PageComponent Page={ProductInfo} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;