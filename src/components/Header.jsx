import React from "react";
import { Link, NavLink } from 'react-router-dom'

import logo from "../images/logo96.png";
import discord from '../images/header/discord.png';
import instagram from '../images/header/instagram.png';
import twitter from '../images/header/twitter.png';
import opensea from '../images/header/opensea.png';
import looksrare from '../images/header/looksrare.png';

import Wallet from '../helpers/Wallet'

const CONFIG = require("../config.json");

export function Header() {

    const { connectWalletHandler } = Wallet();

    let connectionStatus = localStorage.getItem('status');
    let activeAccount = localStorage.getItem('account');

    return <header>
        <div className="container">
            <div className="menu">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                {CONFIG.DISCORD.EXISTS === true &&
                    <a href={CONFIG.DISCORD.URL} target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Discord" />
                    </a>
                }
                {CONFIG.INSTAGRAM.EXISTS === true &&
                    <a href={CONFIG.INSTAGRAM.URL} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                }
                {CONFIG.TWITTER.EXISTS === true &&
                    <a href={CONFIG.TWITTER.URL} target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                }
                {CONFIG.OPENSEA.EXISTS === true &&
                    <a href={CONFIG.OPENSEA.URL} target="_blank" rel="noopener noreferrer">
                        <img src={opensea} alt="Opensea" />
                    </a>
                }
                {CONFIG.LOOKSRARE.EXISTS === true &&
                    <a href={CONFIG.LOOKSRARE.URL} target="_blank" rel="noopener noreferrer">
                        <img src={looksrare} alt="Looksrare" />
                    </a>
                }

            </div>
            <div className="menu">
                <NavLink activeclassname="active" className="heading-link" to="/">
                    ABOUT
                </NavLink>
                <NavLink activeclassname="active" className="heading-link" to="/mint">
                    MINT
                </NavLink>
                <NavLink activeclassname="active" className="heading-link" to="/admin">
                    ADMIN
                </NavLink>
            </div>
            <div>
                <button className="wallet-btn btn" onClick={connectWalletHandler}>
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
            </div>
        </div>

    </header>
}