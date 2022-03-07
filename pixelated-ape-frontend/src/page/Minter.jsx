import React from "react";
import gif from '../images/gif/preview450.gif';
import { Grid } from '@material-ui/core';
import backgroundVideo from '../images/background.mp4';


export function Minter({ data, connected, decreaseNumber, number, increaseNumber, mint }) {
  return <>
    {/* <video autoPlay loop muted className='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video> */}
    <section className="minting">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <div className="gif">
            <img src={gif} alt="CollectionGif" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <p className='minting-wd-title'>Mint a Pixelated Ape </p>
            <p className='minting-wd-subtitle'>
              Ape Pixel Gang is a Bored Ape Yacht Club Derivative Collection.
            </p>
            <p className='minting-wd-subtitle'>
              Each one of the 10k BAYC has been carefully pixelated with a random pixel size.
            </p>
            <p className='minting-wd-subtitle'>Mint up to 10 APG and become a community member</p>
            <p className='minting-wd-title'>{data.totalSupply} / 10000</p>
            <p className='minting-wd-subtitle'>Each Pixelated Ape costs {data.cost / 10 ** 18} ETH</p>

            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {connected === false && <p className='warning'>Connect Wallet</p>}
              {connected === true && <Grid container spacing={2} justifyContent="center" alignItems="center">

                <button className="mint-btn btn" id="mintButton" onClick={decreaseNumber}>
                  <span>-</span>
                </button>
                <button className="mint-btn num" id="mintButton">
                  <span>{number}</span>
                </button>
                <button className="mint-btn btn" id="mintButton" onClick={increaseNumber}>
                  <span>+</span>
                </button>
                <button className="mint-btn btn" id="mintButton" onClick={mint}>
                  <span>Mint</span>
                </button>
              </Grid>}


            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </section>;
  </>
}
