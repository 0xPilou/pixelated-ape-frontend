import React from 'react'
import { Grid } from '@material-ui/core';

import Member from '../Member/Member';
import './Team.css'
import pilou from '../../images/team/pilou.png'
import bennyblanco from '../../images/team/bennyblanco.png'
import baptman from '../../images/team/baptman.png'


function Team() {
    return (
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
    )
}

export default Team