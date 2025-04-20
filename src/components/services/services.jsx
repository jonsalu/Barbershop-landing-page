import React from "react";
import './services.css'

const Services = () => {
    return(
        <div className="services">
            <div className="services-img">
                <img src="/table-pic.png" alt="" />
            </div>

            <div className="services-text">
                <h1>Serviços</h1>
                <ul>
                    <li>Corte de cabelo masculino – R$ 40,00</li>
                    <li>Barba - R$ 35,00</li>
                    <li>Corte + Barba - R$ 65,00</li>
                    <li>Hdiratação capilar - R$ 50,00</li>
                    <li>Pigmentação da barba - R$55,00</li>
                    <li>Design de sobrancelhas - R$ 30,00</li>
                    <li>Raspar a cabeça (máquina) - R$ 25,00</li>
                    <li>Relaxamento ou alisamento capilar - R$ 70,00</li>
                </ul>
            </div>
        </div>
    )
}

export default Services