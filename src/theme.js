import * as color from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';
import config from './config.json'

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: config.primaryColor.startsWith("#")
                ? config.primaryColor
                : color[`${config.primaryColor}`][500],
        },
        secondary: {
            main: '#19857b',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    // typography: {
    //     // fontFamily: [
    //     //     "Frank Ruhl Libre",
    //     //     " sans-serif"
    //     // ].join(','),
    //     // fontSize: 12.5,
    // },
});

export default theme;
