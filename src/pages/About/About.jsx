/* Libs & Modules */
import React from "react";
import { Grid } from '@material-ui/core';

/* UI Elements */
import backgroundVideo from '../../images/background.mp4';
import gif from '../../images/gif/preview450.gif';

/* Configuration */
import CONFIG from '../../config.json'

/* Style */
import './About.css';

function About() {
  return <>
    {/* <video autoPlay loop muted className='video'>
      <source src={backgroundVideo} type='video/mp4' />
    </video> */}
    <div className="main">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <h1 className='about-header'>ABOUT {CONFIG.PROJECT_NAME}</h1>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
            <p className='about-collection-title'>THE COLLECTION</p>
            <p className='about-collection-text'>
              Ape Pixel Gang is a 1:1 Bored Ape Yacht Club Derivative Collection.
            </p>
            <p className='about-collection-text'>
              Each one of the 10k BAYC has been programmatically pixelated with a random pixel size.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <div>
            <img src={gif} />
          </div>
        </Grid>
      </Grid>
    </div >
  </>
}

export default About

