import '../App.css';
import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import logo from "../images/LogoYellow.png"
// import About from './About';
// import Products from './Products';
// import Token from './Token';
// import Roadmap from './Roadmap';

const Navbar = () => {
    return (
        <div id='navbar'>
            <div className='frame1'>
                <img src={logo} alt="logo" />
                <div>
                    <p style={{ color: "#FFC603", lineHeight: "19.37px" }}>BITVERSE</p>
                    <p>FINANCE</p>
                </div>
            </div>
            <div className='frame2'>
                {/* <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/token" element={<Token />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                </Routes> */}
                <Link to='/about'><li>About</li></Link>
                <Link to='/products'><li>Our Products</li></Link>
                <Link to='/token'><li>Token Utility</li></Link>
                <Link to='/roadmap'><li>Roadmap</li></Link>
            </div>
        </div>
    )
}

export default Navbar
