import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <h1>Barbershop</h1>
            <ul className="footer-ul">
                <li><a href="#">Termos de serviço</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Retorno de política</a></li>
                <li><a href="#">Compania de operações</a></li>
            </ul>
            <p>Copyright @ BARBERSHOP Inc. Todos os direitos reservados</p>
        </div>
    )
}

export default Footer