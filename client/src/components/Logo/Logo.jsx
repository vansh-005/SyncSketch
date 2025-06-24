import React from "react";
import './Logo.scss';

import logoImg from '../../assets/icons/syncsketchicon.png';

const Logo = () => {

    return (
        <div className="logo-container">
            <img src={logoImg} alt="" className="logo-icon"></img>
        </div>
    )
}

export default Logo;