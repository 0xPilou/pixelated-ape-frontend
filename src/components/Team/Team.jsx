import React from 'react'
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import Member from '../Member/Member';

import './Team.css'
import { MuiTheme } from '../../helpers/MuiTheme';

import CONFIG from '../../config.json'

import MEMBER1 from '../../images/team/pilou.png'
import MEMBER2 from '../../images/team/bennyblanco.png'
import MEMBER3 from '../../images/team/baptman.png'

function Team() {
    return (
        <ThemeProvider theme={MuiTheme}>

            <Grid container spacing={8} className="team__grid">
                <Member
                    name={CONFIG.TEAM.MEMBER1.NAME}
                    role={CONFIG.TEAM.MEMBER1.ROLE}
                    img={MEMBER1}
                    twitter={CONFIG.TEAM.MEMBER1.SOCIALS}
                />  
                <Member
                    name={CONFIG.TEAM.MEMBER2.NAME}
                    role={CONFIG.TEAM.MEMBER2.ROLE}
                    img={MEMBER2}
                    twitter={CONFIG.TEAM.MEMBER2.SOCIALS}
                />
                <Member
                    name={CONFIG.TEAM.MEMBER3.NAME}
                    role={CONFIG.TEAM.MEMBER3.ROLE}
                    img={MEMBER3}
                    twitter={CONFIG.TEAM.MEMBER3.SOCIALS}
                />
            </Grid>
        </ThemeProvider>
    )
}
export default Team