import React from "react";
import { Grid } from '@material-ui/core';
import backgroundVideo from '../images/background.mp4';


function Home() {
  return <>
    {/* <video autoPlay loop muted className='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video> */}
    <section className="minting">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <p className='minting-wd-title'>Welcome In Ape Pixel Gang Community</p>
        <p className='minting-wd-subtitle'>
          Ape Pixel Gang is a Bored Ape Yacht Club Derivative Collection.
        </p>
        <p className='minting-wd-subtitle'>
          Each one of the 10k BAYC has been carefully pixelated with a random pixel size.
        </p>
        <p className='minting-wd-subtitle'>Mint up to 10 APG and become a community member</p>
      </Grid>
    </section >
  </>
}

export default Home

