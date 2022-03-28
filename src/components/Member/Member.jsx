import React from 'react'
import { Card, CardHeader, CardContent, CardActions, Grid, CardMedia } from '@material-ui/core';
import './Member.css';

function Member({ name, role, img, twitter }) {
    return (
        <Grid item xs={12} sm={8} md={5}>
            <a href={twitter} target="_blank" className="member__socials">

                <Card className='member__card'>
                    <CardHeader
                        className='member__card__header'
                        title={name}
                        subheader={role}
                    />
                    <CardContent>

                        <CardMedia
                            component="img"
                            height="300"
                            image={img}
                            alt={name}
                        />
                    </CardContent>

                    <CardActions disableSpacing className='member__contact'>
                    </CardActions>
                </Card>
            </a>
        </Grid>
    )
}

export default Member