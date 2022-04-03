import React from 'react'
import { Card, CardHeader, CardContent, CardActions, Grid, CardMedia, Typography } from '@material-ui/core';

function GalleryCard({ img, id }) {
    return (
        <Grid item xs={12} sm={8} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    alt='art'
                />
                <CardContent>
                    <CardHeader
                        className='gallery__card__header'
                        title={"# " + id}
                    />
                </CardContent>
            </Card>
        </Grid>)
}

export default GalleryCard