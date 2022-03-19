import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'

import logo from '../../images/logo96.png';
import discord from '../../images/header/discord.png';
import instagram from '../../images/header/instagram.png';
import twitter from '../../images/header/twitter.png';
import opensea from '../../images/header/opensea.png';
import looksrare from '../../images/header/looksrare.png';

import './Navbar.css'

import Wallet from '../../helpers/Wallet'

const CONFIG = require("../../config.json");


export function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    const { connectWalletHandler } = Wallet();

    let connectionStatus = localStorage.getItem('status');
    let activeAccount = localStorage.getItem('account');

    return (
        <nav className={`${showLinks ? "navbar show-nav" : "navbar"}`}>
            <div className="navbar__logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
                {CONFIG.SOCIALS.DISCORD.EXISTS === true &&
                    <a href={CONFIG.SOCIALS.DISCORD.URL} target="_blank" rel="noopener noreferrer" className="navbar__socials">
                        <img src={discord} alt="Discord" />
                    </a>
                }
                {CONFIG.SOCIALS.INSTAGRAM.EXISTS === true &&
                    <a href={CONFIG.SOCIALS.INSTAGRAM.URL} target="_blank" rel="noopener noreferrer" className="navbar__socials">
                        <img src={instagram} alt="Instagram" />
                    </a>
                }
                {CONFIG.SOCIALS.TWITTER.EXISTS === true &&
                    <a href={CONFIG.SOCIALS.TWITTER.URL} target="_blank" rel="noopener noreferrer" className="navbar__socials">
                        <img src={twitter} alt="Twitter" />
                    </a>
                }
                {CONFIG.SOCIALS.OPENSEA.EXISTS === true &&
                    <a href={CONFIG.SOCIALS.OPENSEA.URL} target="_blank" rel="noopener noreferrer" className="navbar__socials">
                        <img src={opensea} alt="Opensea" />
                    </a>
                }
                {CONFIG.SOCIALS.LOOKSRARE.EXISTS === true &&
                    <a href={CONFIG.SOCIALS.LOOKSRARE.URL} target="_blank" rel="noopener noreferrer" className="navbar__socials">
                        <img src={looksrare} alt="Looksrare" />
                    </a>
                }

            </div>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <NavLink activeclassname="navbar__link__active" className="navbar__link" to="/" onClick={handleShowLinks}>
                        ABOUT
                    </NavLink>
                </li>
                {CONFIG.CONTRACT_LIVE &&
                    <li className="navbar__item slideInDown-2">
                        <NavLink activeclassname="navbar__link__active" className="navbar__link" to="/mint" onClick={handleShowLinks}>
                            MINT
                        </NavLink>

                    </li>
                }
                <li className="navbar__item slideInDown-3">
                    {String(activeAccount) === CONFIG.DEPLOYER_ADDRESS.toLowerCase() &&
                        <NavLink activeclassname="navbar__link__active" className="navbar__link" to="/admin" onClick={handleShowLinks}>
                            ADMIN
                        </NavLink>
                    }
                </li>
                <li className="navbar__item slideInDown-4">
                    <button className="navbar__wallet slideInDown-4" onClick={connectWalletHandler}>
                        {!window.ethereum && <span>Install Metamask</span>}
                        {window.ethereum &&
                            <>
                                {connectionStatus === "connected" &&
                                    <span> ✔ {activeAccount.substring(0, 6)}...{activeAccount.slice(-4)} </span>
                                }
                                {(connectionStatus === null
                                    || connectionStatus === "disconnected"
                                    || connectionStatus === "")
                                    &&
                                    <span> Connect Wallet </span>
                                }
                            </>
                        }
                    </button>
                </li>
            </ul>

            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}