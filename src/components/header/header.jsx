import React from "react";
import './header.css'
import { SiGooglemaps } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Header = () => {
    return(
       <div className="header">
            <div className="logo">
                <h1><SiGooglemaps color="red"/> Aracaju-SE</h1>
            </div>

            <div className="nav">
                <ul>
                    <li><a href=""><FaInstagram size={20}/></a></li>
                    <li><a href=""><FaWhatsapp size={20}/></a></li>
                    <li><a href=""><FaTiktok size={20}/></a></li>
                </ul>
            </div>
       </div>
    )
}

export default Header