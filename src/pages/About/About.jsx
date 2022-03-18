/* Libs & Modules */
import React from "react";
import { Grid } from '@material-ui/core';

/* UI Elements */
import backgroundVideo from '../../images/background.mp4';
import about_gif from '../../images/gif/about_gif.gif';

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
            {CONFIG.ABOUT_COLLECTION_1}
            </p>
            <p className='about__collection__text'>
            {CONFIG.ABOUT_COLLECTION_2}

            </p>
          </Grid>
        </Grid>
        <Grid className="about__collection__gif">
            <img src={about_gif} className="about__collection__gif__img"/>
        </Grid>
      </Grid>
    </div >
  </>
}

export default About

