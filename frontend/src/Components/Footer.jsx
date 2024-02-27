import React from 'react'
import behance from "../images/Behance.png"
import facebook from "../images/Facebook.png"
import instagram from "../images/Instagram.png"

const Footer = () => {
    return (
        <div id='footer'>
            <div id='footer-text'>
                <h1>JOIN OUR </h1>
                <h1 style={{ color: "yellow" }}>COMMUNITY</h1>
            </div>
            <div id='social'>
                <img src={facebook} alt="" />
                <img src={behance} alt="behance" />
                <img src={instagram} alt="" />
            </div>
        </div>
    )
}

export default Footer
