import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer className="footer bg-pink-100 text-base-content p-10 font-medium">
          
  <nav>
    <h6 className="footer-title ">Location</h6>
    <a className="link link-hover">No 86,</a>
    <a className="link link-hover">SuperMarket Complex,</a>
    <a className="link link-hover">Matale, Srilanka,</a>
    <a className="link link-hover">Tel :- 077 224 2525</a>
    <a className="link link-hover">Email :- eshop.official@gmail.com</a>
  </nav>
  <nav>
    <h6 className="footer-title ">Link</h6>
    <Link className="link link-hover" to="/">Home</Link>
    <Link className="link link-hover" to="/contact">Contact</Link>
    <Link className="link link-hover" to="/services">Services</Link>
    <Link className="link link-hover" to="/about">About us</Link>
</nav>
  <nav>
    <h6 className="footer-title ">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<div className='items-center'>
<footer className="footer footer-center text-base-content p-4 bg-gray-100">
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} - © 2024 | All Right Reserved | Tech House International (Pvt) Ltd | Designed & Developed{' '}
      <a
        href="https://siliconradonnetworks.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:underline"
      >
        siliconradonnetworks.com
      </a>
    </p>
  </aside>
</footer>

</div>
    </div>
  )
}

export default Footer