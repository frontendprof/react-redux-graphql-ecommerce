
import React from 'react'
import logo from "../../assets/logo.png"
import "./styles.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logo icon" />
                </div>
            </div>

        </header>
    )
}

export default Header