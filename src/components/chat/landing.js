import { Button, Typography} from "@mui/material";
import React, { useState } from "react";
import Chatbot from './chatting';
import './style.css';

export default function App(){
    const [chatbot, setChatbot] = useState(false);
    const [imageN, setImageN] = useState(1);
    return (
        <div className="landingContainer">
            <div className="wrapper">
                <div style={{display: chatbot?'None':'block'}}>
                    <div class="one" style={{display:imageN===1?'block':'None'}} >
                        <img 
                        src="https://img.freepik.com/free-vector/flat-person-meditating-peacefully_23-2148917144.jpg"
                        alt = "healthy women"  className="image"/>
                        <Typography variant="body1">
                            Helps you maintain a better health.
                        </Typography>
                    </div>
                    <div style={{display:imageN===2?'block':'None'}} >
                    <img 
                        src="https://img.freepik.com/free-vector/menstrual-calendar-with-women-health-elements_23-2148680561.jpg"
                        alt = "healthy women"  className="image"/>
                        <Typography variant="body1">
                            Helps you at the time of the month you need the most.
                        </Typography>
                    </div>
                    <div style={{display:imageN===3?'block':'None'}} >
                    <img 
                        src="https://img.freepik.com/free-vector/self-care-health-concept_23-2148517202.jpg"
                        alt = "healthy women"  className="image"/>
                        <Typography variant="body1">
                            And be the best version of you.
                        </Typography>
                    </div>
                    <hr/>
                    <Button onClick={() =>{
                        if(imageN===3){
                            setChatbot(true);
                        }
                        else{
                            setImageN(imageN+1);
                        }
                    }} variant="contained">
                        Next
                    </Button>
            </div>
            
            <div style={{display: chatbot?'block':'None'}}>
                <Chatbot className="chatbot-container" />
            </div>
            
            </div>
        </div>
    )
}