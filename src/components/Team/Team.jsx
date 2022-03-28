import React from 'react'
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import Member from '../Member/Member';
import './Team.css'

import pilou from '../../images/team/pilou.png'
import bennyblanco from '../../images/team/bennyblanco.png'
import baptman from '../../images/team/baptman.png'

import { MuiTheme } from '../../helpers/MuiTheme';


function Team() {
    return (
        <ThemeProvider theme={MuiTheme}>

            <Grid container spacing={8} className="team__grid">
                <Member
                    name='0xPilou'
                    role='Developer'
                    img={pilou}
                    twitter="https://twitter.com/0xPilou"
                />
                <Member
                    name='Benny Blanco'
                    role='Marketing'
                    img={bennyblanco}
                    twitter="https://twitter.com/BennyBlanco_OG"
                />
                <Member
                    name='Bapt Man'
                    role='Designer'
                    img={baptman}
                    twitter="https://twitter.com/_bapt_man_"
                />
            </Grid>
        </ThemeProvider>

    )
}

export default Team