/* Libs & Modules */
import React from 'react'
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

/* Helpers and Logic Components */
import GalleryLogic from './GalleryLogic';
import { MuiTheme } from '../../helpers/MuiTheme';


/* Style */
import './Gallery.css'

function Gallery() {

    const { collection } = GalleryLogic();

    return (
        <div className="main">
            <Grid>
                <h1 className='gallery__header'>Your Collection</h1>
            </Grid>
            {collection.length === 0 &&
                <p className='gallery__warning'>You do not own any piece yet !</p>
            }
            <ThemeProvider theme={MuiTheme}>
                <Grid container spacing={8} className="team__grid">
                    {collection}
                </Grid>
            </ThemeProvider>
        </div>
    )
}
export default Gallery