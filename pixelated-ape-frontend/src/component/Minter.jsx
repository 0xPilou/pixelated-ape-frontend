import React, { Component } from "react";
import gif from '../images/gif/preview450.gif';
import { Grid } from '@material-ui/core';


import '../Blockchain.js'

export class Minter extends Component {
    render() {
        return (
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={5}>
                    <div className="gif">
                        <img src={gif} alt="CollectionGif" />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <p className='minting-wd-title'>Mint a Pixelated Ape</p>
                        <p className='minting-wd-subtitle'>
                            Ape Pixel Gang is a Bored Ape Yacht Club Derivative Collection.
                        </p>
                        <p className='minting-wd-subtitle'>
                            Each one of the 10k BAYC has been carefully pixelated with a random pixel size.
                        </p>
                        <p className='minting-wd-subtitle'>Become a community member</p>
                        <button className="mint-btn btn" id="mintButton">
                            <span>Mint</span>
                        </button>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}