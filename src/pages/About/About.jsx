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
      <Grid>
        <h1 className='about__header'>ABOUT {CONFIG.PROJECT_NAME}</h1>
      </Grid>
      <Grid className="about__collection">
        <Grid className="about__collection__description">
          <Grid className="about__collection__description__text">
            <p className='about__collection__title'>THE COLLECTION</p>
            <p className='about__collection__text'>
              Ape Pixel Gang is a 1:1 Bored Ape Yacht Club Derivative Collection.
            </p>
            <p className='about__collection__text'>
              Each one of the 10k BAYC has been programmatically pixelated with a random pixel size.
            </p>
          </Grid>
        </Grid>
        <Grid className="about__collection__gif">
            <img src={gif} className="about__collection__gif__img"/>
        </Grid>
      </Grid>
    </div >
  </>
}

export default About

