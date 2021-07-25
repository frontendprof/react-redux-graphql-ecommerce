
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

import "./styles.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo icon" />
                    </Link>
                    
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header