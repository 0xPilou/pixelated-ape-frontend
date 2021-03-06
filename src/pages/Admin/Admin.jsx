/* Libs & Modules */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';


/* Logic & Helpers */
import AdminLogic from './AdminLogic'
import useFetch from '../../helpers/useFetch'

/* Style */
import './Admin.css'

function Admin() {
    const [blockId, setBlockId] = useState(0);
    const [baseURI, setBaseURI] = useState("");
    const [unrevealedURI, setUnrevealedURI] = useState("");

    const { data, refetch } = useFetch();


    const { updateStartBlock,
        updateBaseURI,
        updateUnrevealedURI,
        updateRevealStatus,
        withdrawFunds
    } = AdminLogic()

    return (
        <section className="main">
            <Grid container className='admin-main-grid'>
                <h1 className='admin-settings-header'>SETTINGS</h1>
            </Grid>
            <Grid container className='admin-main-grid'>
                <Grid item xs={8}>
                    <Grid container className="admin-grid-item">
                        <Grid item xs={12}>
                            <p className='admin-section-name'>Public Sale Starting Block</p>
                        </Grid>
                        <Grid item xs={12}>
                            {data.startBlock === "0" &&
                                <p className='admin-section-text'>Current : Not Set</p>
                            }
                            {data.startBlock !== "0" &&
                                <p className='admin-section-text'>Current : <span className="admin-info">{data.startBlock}</span></p>
                            }
                        </Grid>

                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn"
                                type="number"
                                placeholder="input block number"
                                onChange={e => setBlockId(e.target.value)}
                            />
                            <button className="admin-btn"
                                onClick={e => {
                                    updateStartBlock(blockId).then(() => {
                                        refetch();
                                    })
                                }}
                            >
                                <span>Update</span>
                            </button>
                        </Grid>
                    </Grid>
                    <Grid container className="admin-grid-item">
                        <p className='admin-section-name'>URI settings</p>
                        <p className='admin-section-text'>Base URI can only be set once, proceed with caution</p>
                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn-nocap"
                                type="string"
                                placeholder="INPUT BASE URI"
                                onChange={e => setBaseURI(e.target.value)}
                            />
                            <button className="admin-btn" onClick={e => updateBaseURI(baseURI)}>
                                <span>Update</span>
                            </button>
                        </Grid>
                        <Grid>
                            <p className='admin-section-text'>CURRENT UNREVEALED URI :</p>
                        </Grid>
                        {data.unrevealedURI === "0" &&
                            <p className='admin-section-text'>Not Set</p>
                        }
                        {data.unrevealedURI !== "0" &&
                            <p className='admin-section-text-nocap'><span className="admin-info">{data.unrevealedURI}</span></p>
                        }
                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn-nocap"
                                type="string"
                                placeholder="INPUT UNREVEALED URI"
                                onChange={e => setUnrevealedURI(e.target.value)}
                            />
                            <button className="admin-btn"
                                onClick={e => {
                                    updateUnrevealedURI(unrevealedURI).then(() => {
                                        refetch();
                                    })
                                }}
                            >
                                <span>Update</span>
                            </button>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" className="admin-grid-item">
                        <p className='admin-section-name'>Reveal settings</p>
                        {data.revealStatus === true &&
                            <p className='admin-section-text'>
                                Current Status : <span className="admin-info">REVEALED</span>
                            </p>
                        }
                        {data.revealStatus === false &&
                            <p className='admin-section-text'>
                                Current Status : <span className="admin-info">UNREVEALED</span>
                            </p>
                        }
                        <button disabled={data.revealStatus} className="admin-btn"
                            onClick={() => {
                                updateRevealStatus().then(() => {
                                    refetch();
                                })
                            }}
                        >
                            <span>Reveal</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='admin-main-grid'>
                <h1 className='admin-treasury-header'>TREASURY</h1>
            </Grid>
            <Grid container className='admin-main-grid'>
                <Grid item xs={8}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" className="admin-grid-item">
                        <p className='admin-section-name'>Contract balances : </p>
                        <p className='admin-section-name'><span className="admin-info">{data.balance / 10 ** 18} ETH</span></p>
                        <p className='admin-section-name'><span className="admin-info">{data.apeBalance / 10 ** 18} APECOIN</span></p>
                        <button className="admin-btn"
                            onClick={() => {
                                withdrawFunds().then(() => {
                                    refetch();
                                })
                            }}
                        >
                            <span>Withdraw All</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
} export default Admin