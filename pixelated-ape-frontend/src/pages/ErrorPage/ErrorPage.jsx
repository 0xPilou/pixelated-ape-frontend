/* Libs & Modules */
import React from 'react'
import { Link } from 'react-router-dom'

/* Style */
import './ErrorPage.css'

function ErrorPage() {
    return (
        <>
            <div className='error-page'>
                <p className='error-title'>
                    Looks like you got lost in the Pixelverse
                </p>
                <Link to="/">
                    <button className="error-btn btn">
                        <span>Return Back Home</span>
                    </button>
                </Link>
            </div>
        </>
    )
} export default ErrorPage