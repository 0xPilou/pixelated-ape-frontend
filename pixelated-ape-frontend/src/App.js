
import React, { useState } from 'react';
import { Header } from './component/Header'
import backgroundVideo from './images/background.mp4';
import gif from './images/gif/preview450.gif';
import { Grid } from '@material-ui/core';

import './Blockchain.js'

import './css/App.css';


function App() {
  const [number, setNumber] = useState(3);

  const increaseNumber = () => {
    if(number < 10){
      setNumber(number + 1);
    }
  }

  const decreaseNumber = () => {
    if(number > 1){
      setNumber(number - 1);
    }
  }

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
                        <p className='minting-wd-subtitle'>Mint an APG and become a community member</p>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <button className="mint-btn btn" id="mintButton" onClick={decreaseNumber}>
                                <span>-</span>
                            </button>
                            <button className="mint-btn num" id="mintButton">
                                <span>{number}</span>
                            </button>
                            <button className="mint-btn btn" id="mintButton" onClick={increaseNumber}>
                                <span>+</span>
                            </button>
                        </Grid>

                        <button className="mint-btn btn" id="mintButton">
                            <span>Mint</span>
                        </button>
                    </Grid>

                </Grid>
            </Grid>      </section>
    </div>
  );
}

export default App;
