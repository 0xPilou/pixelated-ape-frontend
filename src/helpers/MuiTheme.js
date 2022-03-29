import { createTheme } from '@material-ui/core/styles';


export const MuiTheme = createTheme({
    overrides: {
        MuiRadio: {
            root: {
                padding: "30px",
                color: '#b2d5ff',
            },
            colorSecondary: {
                '&$checked': {
                    padding: "30px",
                    color: '#b2d5ff',
                },
            },
        },
        MuiCard: {
            root: {
                background: '#b2d5ff',
                borderRadius: "30px",
            }
        },
        MuiCardHeader: {
            title: {
                color: '#122369',
                fontFamily: 'HISKYFLIPPERHI',
                fontSize: '2rem'
            },
            subheader: {
                fontFamily: 'HISKYFLIPPERHI',
                fontSize: '1.5rem'

            }

        },
        MuiCardMedia: {
            root: {
                borderRadius: "15px"
            }
        }

    }
});