import React from 'react'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'



function ErrorPage() {
    return (
        <>
            <p className='minting-wd-title error-page'>
                Looks like you got lost in the Pixelverse
            </p>
            <div className='home-btn'>
                <Link to="/">
                    <button className="mint-btn btn">
                        <span>Return Back Home</span>
                    </button>
                </Link>

            </div>
        </>
    )
}

export default ErrorPage