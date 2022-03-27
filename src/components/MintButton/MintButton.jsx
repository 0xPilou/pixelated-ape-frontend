import React from 'react'
import { Grid, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ETH_LOGO from '../../images/logo/eth.png';
import APECOIN_LOGO from '../../images/logo/apecoin.png';

import MinterLogic from '../../pages/Minter/MinterLogic';

import { MuiTheme } from '../../helpers/MuiTheme';

export function MintButton({ data, refetch }) {
    const {
        paymentMethod,
        updatePaymentMethod,
        number,
        increaseNumber,
        decreaseNumber,
        mint,
        approve,
        mintWithApecoin
    } = MinterLogic();

    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <p className='minter__subtitle'>Mint With :</p>
                <ThemeProvider theme={MuiTheme}>
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
                                            <img src={APECOIN_LOGO} className="profile-img" width="60px" height="auto" />
                                        </div>
                                    </>
                                }
                                labelPlacement="top"
                            />

                        </RadioGroup>
                    </FormControl>
                </ThemeProvider>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <button className="minter__btn" onClick={decreaseNumber}>
                        <span>-</span>
                    </button>
                    <button className="minter__input">
                        <span>{number}</span>
                    </button>
                    <button className="minter__btn" onClick={increaseNumber}>
                        <span>+</span>
                    </button>
                </Grid>
                {paymentMethod === "ETH" &&
                    <Grid container justifyContent="center" alignItems="center">
                        <button className="minter__btn"
                            onClick={() => {
                                mint().then(() => {
                                    refetch();
                                })
                            }}
                        >
                            <span>Mint</span>
                        </button>
                    </Grid>
                }
                {paymentMethod === "APECOIN" &&
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        {(data.apecoinAllowance / 10 ** 18) < (number * 15) &&
                            <button className="minter__btn"
                                onClick={() => {
                                    approve().then(() => {
                                        refetch();
                                    })
                                }}
                            >
                                <span>Approve</span>
                            </button>
                        }
                    </Grid>
                }
            </Grid>

        </>
    )
};
