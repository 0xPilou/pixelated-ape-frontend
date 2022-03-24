import React from 'react'
import { Grid, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import ETH_LOGO from '../../images/logo/eth2.png';
import APECOIN_LOGO from '../../images/logo/apecoin.png';

import MinterLogic from '../../pages/Minter/MinterLogic';

export function MintButton() {
    const {
        paymentMethod,
        updatePaymentMethod,
        number,
        increaseNumber,
        decreaseNumber,
        mint
    } = MinterLogic();

    return (
        <>
        
            <FormControl component="fieldset">
                <RadioGroup
                    row
                    aria-label="assetChoice"
                    name="controlled-radio-buttons-group"
                    onChange={(_, value) => updatePaymentMethod(value)}
                    value={paymentMethod}
                >
                    <FormControlLabel
                        value="ETH"
                        control={<Radio />}
                        label={
                            <>
                                <div>
                                    <img src={ETH_LOGO} className="profile-img" width="40px" height="auto" />
                                </div>
                            </>
                        }
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="APECOIN"
                        control={<Radio />}
                        label={
                            <>
                                <div>
                                    <img src={APECOIN_LOGO} className="profile-img" width="40px" height="auto" />
                                </div>
                            </>
                        }
                        labelPlacement="top"
                    />

                </RadioGroup>
            </FormControl>
            <Grid container direction="column">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <button className="minter__btn btn" onClick={decreaseNumber}>
                        <span>-</span>
                    </button>
                    <button className="minter__btn num">
                        <span>{number}</span>
                    </button>
                    <button className="minter__btn btn" onClick={increaseNumber}>
                        <span>+</span>
                    </button>
                </Grid>
                {paymentMethod === "ETH" &&
                    <Grid container justifyContent="center" alignItems="center">
                        <button className="minter__btn btn" onClick={mint}>
                            <span>Mint</span>
                        </button>
                    </Grid>
                }
                {paymentMethod === "APECOIN" &&
                    <Grid container justifyContent="center" alignItems="center">
                        <button className="minter__btn btn" onClick={mint}>
                            <span>Approve</span>
                        </button>
                    </Grid>
                }
            </Grid>

        </>
    )
};
