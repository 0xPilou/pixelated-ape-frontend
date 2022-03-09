import React, { useState } from 'react';
import { Grid } from '@material-ui/core';


function Admin({ data, updateStartBlock, updateBaseURI, updateUnrevealedURI, updateRevealStatus }) {
    const [blockId, setBlockId] = useState(0);
    const [baseURI, setBaseURI] = useState("");
    const [unrevealedURI, setUnrevealedURI] = useState("");

    return (
        <section className="admin">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <h1 className='admin-settings-header'>SETTINGS</h1>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className="admin-grid-item">
                        <p className='admin-section-name'>Public Sale Starting Block</p>
                        {data.startBlock === "0" &&
                            <p className='admin-section-text'>
                                Current Start Block Number : Not Set
                            </p>
                        }
                        {data.startBlock !== "0" &&
                            <p className='admin-section-text'>
                                Current Start Block Number : {data.startBlock}
                            </p>
                        }
                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
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
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className="admin-grid-item">
                        <p className='admin-section-name'>URI settings</p>
                            <p className='admin-section-text'>
                                Base URI can only be set once, proceed with caution
                            </p>

                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="admin-input-grid">
                            <input
                                className="admin-input-btn-nocap btn-nocap"
                                type="string"
                                placeholder="INPUT BASE URI"
                                onChange={e => setBaseURI(e.target.value)}
                            />
                            <button className="admin-btn btn" onClick={e => updateBaseURI(baseURI)}>
                                <span>Set</span>
                            </button>
                        </Grid>
                        {data.unrevealedURI === "0" &&
                            <p className='admin-section-text'>
                                Current Unrevealed URI : Not Set
                            </p>
                        }
                        {data.unrevealedURI !== "0" &&
                            <p className='admin-section-text-nocap'>
                                Current Unrevealed URI : {data.unrevealedURI}
                            </p>
                        }
                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
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
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className="admin-grid-item">
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
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <h1 className='admin-treasury-header'>TREASURY</h1>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className="admin-grid-item">
                        <p className='admin-section-name'>Contract balance : 500.25 ETH</p>
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