import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NavbarTopBar from './Components/Navbar/Navbar';
import FooterFiveColsLogoSubFooter from './Components/Footer/Footer';
const PageComponent = ({Page}) => {
  return (
    <>
      <NavbarTopBar/>
      <Page />
      <FooterFiveColsLogoSubFooter />
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
          <Route path="/product" element={<PageComponent Page={Product} />} />
          <Route path="/about" element={<PageComponent Page={About} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;