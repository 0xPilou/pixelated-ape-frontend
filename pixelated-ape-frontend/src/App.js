
import React, { useState, useEffect } from 'react';
import { Header } from './component/Header'
import apggif from './images/gif/preview450.gif';
import backgroundVideo from './images/background.mp4';
import { Grid } from '@material-ui/core';

import './css/App.css';


function App() {
  return (

    <div className="App">
      {/* <video autoPlay loop muted className='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
      <Header />
      <section className="minting">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={5}>
            <div className="gif">
              <img src={apggif} alt="CollectionGif" />
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
      </section>
    </div>
  );
}

export default App;
