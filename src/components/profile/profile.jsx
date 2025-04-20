import React from "react";
import './profile.css'

const Profile = () => {
    return(
        <div className="profile">
            <div className="profile-text">
                <h1>Quem sou eu</h1>
                <p>Sou Claudio, especialista em cortes e cuidados masculinos. Minha missão é proporcionar estilo e confiança aos meus clientes, unindo técnicas modernas com um atendimento personalizado. Seja bem-vindo à minha barbearia, onde tradição e qualidade se encontram.
                </p>
            </div>

            <div className="profile-img">
                <img src="/claudio-prof-pic.png" alt="" />
            </div>
        </div>
    )
}

export default Profile