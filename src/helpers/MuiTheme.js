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
                transition: "top .5s ease"


            }
        },
        MuiCardHeader: {
            title: {
                color: '#122369',
                fontFamily: 'HISKYFLIPPERHI'
            },
            subheader: {
                fontFamily: 'HISKYFLIPPERHI'
            }

        },
        MuiCardMedia: {
            root: {
                borderRadius: "15px"
            }
        }

    }
});