import { Typography } from "@mui/material";
import React from "react";

export default function App(){
    return (
        <div style={Styles.container}>
            <Typography variant="h3">
                404. Not Found 
            </Typography>
            <Typography variant="body1">
                Oops, the requested page you have queried for does not exist. Please navigate to <a href="/">home</a> by clicking this link.
            </Typography>
            <Typography variant="body1">
                &copy; Ayush Anand. 2023
            </Typography>
        </div>
    )
}
const Styles={
    container:{
        "padding": "30px 10px 30px 10px",
        "margin": "0px auto 0px auto",
        "text-align": "center"
    }
}