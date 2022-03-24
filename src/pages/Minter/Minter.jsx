/* Libs & Modules */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

/* Logic & Helpers */
import MinterLogic from './MinterLogic'
import FetchData from '../../helpers/FetchData'
import { MintButton } from '../../components/MintButton/MintButton'

/* UI Elements */
import backgroundVideo from '../../images/background.mp4';
import minter_gif from '../../images/gif/minter_gif.gif';

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
      <Grid className="minter__grid" container spacing={2} justifyContent="center" alignItems="center">
        <Grid className="minter__grid__gif">
          <div>
            <img src={minter_gif} className="minter__grid__gif__img" />
          </div>
        </Grid>
        <Grid className="minter__grid__action">
          <Grid>
            <p className='minter__title'>Mint a Pixelated Ape </p>
            <p className='minter__subtitle'>Mint up to 10 APG and become a community member</p>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {(connectionStatus === null
                || connectionStatus === "disconnected"
                || connectionStatus === "") && <p className='minter__title'>Connect Wallet</p>}
              {connectionStatus === "connected" &&
                <>
                  <p className='minter__title'>
                    {data.totalSupply} / {data.maxQuantity}
                  </p>
                  <p className='minter__subtitle'>Each piece costs {data.cost / 10 ** 18} ETH or 15 APECOIN</p>
                  <MintButton />
                </>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </div>
  </>
} export default Minter

