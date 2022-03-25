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

  const { mint } = MinterLogic()
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
      <Grid className="minter__grid" container spacing={2}>
        <Grid className="minter__grid__gif">
          <p className='minter__title'>Mint a Pixelated Ape </p>

          <p className='minter__subtitle'>Mint up to <span className="minter__info">10 APG per tx </span></p>
          <p className='minter__title'>
          <span className="minter__info">{data.totalSupply}</span> / {data.maxQuantity}
          </p>
          <Grid container direction="column">
            <Grid item>
              <p className='minter__subtitle__price'>Each piece costs :</p>
            </Grid>
            <Grid item>
              <p className='minter__subtitle__price'><span className="minter__info">{data.cost / 10 ** 18} ETH</span></p>
            </Grid>
            <Grid item>
              <p className='minter__subtitle__price'>or</p>
            </Grid>
            <Grid item>
              <p className='minter__subtitle__price'><span className="minter__info">15 APECOIN</span></p>
            </Grid>
          </Grid>
            
        </Grid>
        <Grid className="minter__grid__action">
          <Grid>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {(connectionStatus === null
                || connectionStatus === "disconnected"
                || connectionStatus === "") && <p className='minter__title'>Connect Wallet</p>}
              {connectionStatus === "connected" &&
                <>
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

