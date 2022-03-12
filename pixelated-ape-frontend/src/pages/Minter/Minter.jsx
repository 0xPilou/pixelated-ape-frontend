/* Libs & Modules */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

/* Logic & Helpers */
import MinterLogic from './MinterLogic'
import FetchData from '../../helpers/FetchData'

/* UI Elements */
import backgroundVideo from '../../images/background.mp4';
import gif from '../../images/gif/preview450.gif';




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
            <p className='minting-wd-subtitle'>Mint up to 10 APG and become a community member</p>


            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {(connectionStatus === null
                || connectionStatus === "disconnected"
                || connectionStatus === "") && <p className='minting-wd-title'>Connect Wallet</p>}
              {connectionStatus === "connected" &&
                <>
                  <p className='minting-wd-title'>{data.totalSupply} / {data.maxQuantity}</p>
                  <p className='minting-wd-subtitle'>Each Pixelated Ape costs {data.cost / 10 ** 18} ETH</p>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">

                    <button className="mint-btn btn" onClick={decreaseNumber}>
                      <span>-</span>
                    </button>
                    <button className="mint-btn num">
                      <span>{number}</span>
                    </button>
                    <button className="mint-btn btn" onClick={increaseNumber}>
                      <span>+</span>
                    </button>
                    <button className="mint-btn btn" onClick={mint}>
                      <span>Mint</span>
                    </button>
                  </Grid>
                </>
              }

            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </section>
  </>
}

export default Minter

