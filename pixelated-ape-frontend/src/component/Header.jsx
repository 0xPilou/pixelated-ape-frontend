import React from "react";
import { Link, NavLink } from 'react-router-dom'

import logo from "../images/logo96.png";
import discord from '../images/header/discord.png';
import instagram from '../images/header/instagram.png';
import twitter from '../images/header/twitter.png';
import opensea from '../images/header/opensea.png';
import MetaMaskOnboarding from '@metamask/onboarding'

const CONFIG = require("../config.json");

export function Header({ updateConnection }) {
    window.addEventListener('DOMContentLoaded', () => {
        const onboarding = new MetaMaskOnboarding();
        const onboardButton = document.getElementById('connectWallet');
        let accounts;

        const updateButton = async () => {
            if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
                onboardButton.innerText = 'Install MetaMask!';
                onboardButton.onclick = () => {
                    onboardButton.innerText = 'Connecting...';
                    onboarding.startOnboarding();
                };
            } else if (accounts && accounts.length > 0) {
                onboardButton.innerText = `✔ ${accounts[0].substring(0, 6)}...${accounts[0].slice(-4)}`;
                onboarding.stopOnboarding();
                updateConnection(true);
            } else {
                onboardButton.innerText = 'Connect MetaMask!';
                onboardButton.onclick = async () => {
                    await window.ethereum.request({
                        method: 'eth_requestAccounts',
                    })
                        .then(function (accounts) {
                            onboardButton.innerText = `✔ ${accounts[0].substring(0, 6)}...${accounts[0].slice(-4)}`;
                            updateConnection(true);
                        });
                };
            }
        };
        updateButton();

        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                updateButton();
            });
        }
    });
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
                        <img src={opensea} alt="Looksrare" />
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
                <button className="wallet-btn btn" id="connectWallet">
                    <span>Connect</span>
                </button>
            </div>
        </div>

    </header>
}