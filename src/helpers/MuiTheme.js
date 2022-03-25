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
    }
});