import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#e1bfe8",
            dark: "#af8fb6",
            light: "#fff2ff",
            contrastText: "#000000"
        },
        secondary: {
            main: "#778f9b"
        },
        background: {
            default: "#FFFFFF", 
            paper: "#FFFFFF"
        }

    }
}) 
