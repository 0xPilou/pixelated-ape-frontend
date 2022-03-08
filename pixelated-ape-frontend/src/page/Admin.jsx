import React from 'react'
import { Grid } from '@material-ui/core';


function Admin() {
    return (
        <section className="admin">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <h1 className='admin-settings-header'>SETTINGS</h1>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="start" className="admin-grid-item">
                        <p className='admin-section-name'>Public Sale Starting Block</p>
                        <p className='admin-section-text'>
                            Input Block Number :
                        </p>
                    </Grid>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="start" className="admin-grid-item">
                        <p className='admin-section-name'>URI settings</p>
                        <p className='admin-section-text'>
                            Input base URI :
                        </p>
                        <p className='admin-section-text'>
                            Input Unrevealed URI :
                        </p>
                    </Grid>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="start" className="admin-grid-item">
                        <p className='admin-section-name'>Reveal settings</p>
                        <p className='admin-section-text'>
                            Initiate reveal :
                        </p>
                        <button className="admin-btn btn" >
                            <span>Reveal</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <h1 className='admin-treasury-header'>TREASURY</h1>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="start" className="admin-grid-item">
                        <p className='admin-section-name'>Contract balance : 500.25 ETH</p>
                        <p className='admin-section-text'>
                            Initiate withdrawal :
                        </p>
                        <button className="admin-btn btn" >
                            <span>Withdraw All</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>


        </section>

    )
}

export default Admin