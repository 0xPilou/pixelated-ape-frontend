/* Libs & Modules */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

/* Logic & Helpers */
import MinterLogic from './MinterLogic'
import FetchData from '../../helpers/FetchData'

/* UI Elements */
import backgroundVideo from '../../images/background.mp4';
import gif from '../../images/gif/preview450.gif';

/* Style */
import './Minter.css'

function Minter() {

  const { number, increaseNumber, decreaseNumber, mint } = MinterLogic()
  const { data, fetchData } = FetchData();

  const connectionStatus = localStorage.getItem('status')

  useEffect(() => {
    let isMounted = true;
    if (isMounted) fetchData();
    return () => { isMounted = false };
  }, [mint])

  return <>
    {/* <video autoPlay loop muted className='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video> */}
    <div className="main">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <div>
            <img src={gif} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <p className='minter-title'>Mint a Pixelated Ape </p>
            <p className='minter-subtitle'>Mint up to 10 APG and become a community member</p>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {(connectionStatus === null
                || connectionStatus === "disconnected"
                || connectionStatus === "") && <p className='minter-title'>Connect Wallet</p>}
              {connectionStatus === "connected" &&
                <>
                  <p className='minter-title'>{data.totalSupply} / {data.maxQuantity}</p>
                  <p className='minter-subtitle'>Each Pixelated Ape costs {data.cost / 10 ** 18} ETH</p>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">

                    <button className="minter-btn btn" onClick={decreaseNumber}>
                      <span>-</span>
                    </button>
                    <button className="minter-btn num">
                      <span>{number}</span>
                    </button>
                    <button className="minter-btn btn" onClick={increaseNumber}>
                      <span>+</span>
                    </button>
                    <button className="minter-btn btn" onClick={mint}>
                      <span>Mint</span>
                    </button>
                  </Grid>
                </>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </>
} export default Minter

