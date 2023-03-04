import React from "react";
import Button from "@mui/material/Button"
import './style.css'

export default function App(){
    return (
        <header className="headerContainer">
            <div className="wrapper">
                <div className="logo">
                    Meera
                </div>
                <div className="horizontalGroup">
                    <Button variant="contained" href="/chat">Try Now</Button>
                    <Button variant="text">About</Button>
                </div>
            </div>
        </header>
    )
}