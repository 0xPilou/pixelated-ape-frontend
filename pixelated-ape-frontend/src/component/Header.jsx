import React, { Component } from "react";
import logo from "../images/logo96.png";
import discord from '../images/header/discord.png';
import instagram from '../images/header/instagram.png';
import twitter from '../images/header/twitter.png';
import opensea from '../images/header/opensea.png';

export class Header extends Component {
    render() {
        return <header>
            <div className="container">
                <div className="menu">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <a href="https://discord.gg/hq5ccHHa" target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Discord" />
                    </a>
                    <a href="https://www.instagram.com/apepixelgang/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/ApePixelGang" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://opensea.io/collection/ApePixelGang" target="_blank" rel="noopener noreferrer">
                        <img src={opensea} alt="Opensea" />
                    </a>
                </div>
                <div className="menu">

                    <button className="wallet-btn btn" id="connectWallet">
                        <span>Connect Wallet</span>
                    </button>
                </div>
            </div>

        </header>

    }
}