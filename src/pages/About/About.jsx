/* Libs & Modules */
import React from "react";
import { Grid } from '@material-ui/core';

/* Pages & Components */
import Team from '../../components/Team/Team'

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
              Ape Pixel Gang is a 1:1 <span className="about__info">Bored Ape Yacht Club Derivative</span> Collection.</p>
            <p className='about__collection__text'>
              Each one of the 10k BAYC has been programmatically <span className="about__info">pixelated with a random pixel size</span>.</p>
          </Grid>
        </Grid>
        <Grid className="about__collection__gif">
          <img src={about_gif} className="about__collection__gif__img" />
        </Grid>
      </Grid>
      <Grid>
        <h1 className='about__header'>ABOUT THE TEAM</h1>
      </Grid>
      <Team />






    </div >
  </>
}

export default About

