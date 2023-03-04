import { Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import './style.css'

export default function App(){
    return (
        <footer className="footerContainer" align="left">
            <div className="wrapper">
                <Typography variant="h4">
                    Meera
                    <hr width="75px" style={{height: "3px", color:"white", backgroundColor:"white"}} align="left"/>
                </Typography>
                <Typography variant="body1">
                    Add some lines about the product. Since I don't have anything to say right now, I'll
                    mostly fit in some dummy text so that the content looks full.
                </Typography>
                <Typography variant="body1">
                    &copy; 2023 Ayush Anand
                </Typography>
                <GitHubIcon />
            </div>
        </footer>
    )
}