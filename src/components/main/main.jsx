import React from "react";
import './main.css'
import Header from "../header/header";
import { SlMustache } from "react-icons/sl";

const Main = () => {
    return(
        <div className="main">
            <div className="main-header">
                <Header />
            </div>
            <div className="main-content">
                <div className="sidebar">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Quem sou eu</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>

                <div className="main-logo">
                    <img src="/logo-main-w.png" alt="" />
                    
                    <h1>BARBERSHOP<span>.</span></h1>
                </div>
            </div>
            

            
        </div>
    )
}

export default Main