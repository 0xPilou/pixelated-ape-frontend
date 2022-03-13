/* Libs & Modules */
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';


/* Logic & Helpers */
import AdminLogic from './AdminLogic'
import FetchData from '../../helpers/FetchData'

/* Style */
import './Admin.css'

function Admin() {
    const [blockId, setBlockId] = useState(0);
    const [baseURI, setBaseURI] = useState("");
    const [unrevealedURI, setUnrevealedURI] = useState("");

    const { data, fetchData } = FetchData();

    const { updateStartBlock,
        updateBaseURI,
        updateUnrevealedURI,
        updateRevealStatus,
        withdrawFunds
    } = AdminLogic()

    useEffect(() => {
        let isMounted = true;
        if (isMounted) fetchData();
        return () => { isMounted = false };
    }, [updateStartBlock,
        updateBaseURI,
        updateUnrevealedURI,
        updateRevealStatus,
        withdrawFunds
    ])

    return (
        <section className="admin">
            <Grid container className='admin-main-grid'>
                <h1 className='admin-settings-header'>SETTINGS</h1>
            </Grid>
            <Grid container className='admin-main-grid'>
                <Grid item xs={8}>
                    <Grid container className="admin-grid-item">
                        <p className='admin-section-name'>Public Sale Starting Block</p>
                        <p className='admin-section-text'>Current Start Block Number :</p>
                        {data.startBlock === "0" &&
                            <p className='admin-section-text'>Not Set</p>
                        }
                        {data.startBlock !== "0" &&
                            <p className='admin-section-text'>{data.startBlock}</p>
                        }
                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn btn"
                                type="number"
                                placeholder="input block number"
                                onChange={e => setBlockId(e.target.value)}
                            />
                            <button className="admin-btn btn" onClick={e => updateStartBlock(blockId)}>
                                <span>Update</span>
                            </button>
                        </Grid>
                    </Grid>
                    <Grid container className="admin-grid-item">
                        <p className='admin-section-name'>URI settings</p>
                        <p className='admin-section-text'>Base URI can only be set once, proceed with caution</p>
                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn-nocap btn-nocap"
                                type="string"
                                placeholder="INPUT BASE URI"
                                onChange={e => setBaseURI(e.target.value)}
                            />
                            <button className="admin-btn btn" onClick={e => updateBaseURI(baseURI)}>
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
                            <p className='admin-section-text-nocap'>{data.unrevealedURI}</p>
                        }
                        <Grid container className="admin-input-grid">
                            <input
                                className="admin-input-btn-nocap btn-nocap"
                                type="string"
                                placeholder="INPUT UNREVEALED URI"
                                onChange={e => setUnrevealedURI(e.target.value)}
                            />
                            <button className="admin-btn btn" onClick={e => updateUnrevealedURI(unrevealedURI)}>
                                <span>Update</span>
                            </button>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" className="admin-grid-item">
                        <p className='admin-section-name'>Reveal settings</p>
                        {data.revealStatus === true &&
                            <p className='admin-section-text'>
                                Current Status : REVEALED
                            </p>
                        }
                        {data.revealStatus === false &&
                            <p className='admin-section-text'>
                                Current Status : UNREVEALED
                            </p>
                        }
                        <button disabled={data.revealStatus} className="admin-btn btn" onClick={updateRevealStatus}  >
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
                        <p className='admin-section-name'>Contract balance : {data.balance / 10 ** 18} ETH</p>
                        <button className="admin-btn btn" onClick={withdrawFunds}>
                            <span>Withdraw All</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
} export default Admin