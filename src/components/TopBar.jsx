import React from 'react';
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import pinterest from '../images/pinterest.png'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'
import email from '../images/email.png'

const TopBar = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-top-actions">
                    <ul className="header-social-container mb-0">
                        <li>
                            <a href="#" className="social-link">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <img src={linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <img src={pinterest} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <img src={whatsapp} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <img src={email} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default TopBar