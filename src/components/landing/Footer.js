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
                Meera is an exceptional chatbot cum app that can help with your queries during that time of the month simultaneously preserving both privacy and anonymity.
                In a few taps and clicks, you have your answers. It is not a heavy card-based dashboard which most modern apps have, so you don't get lost among which card or article to read for help.
                </Typography>
                <Typography variant="body1">
                    &copy; 2023 Ayush Anand
                </Typography>
                <GitHubIcon />
            </div>
        </footer>
    )
}