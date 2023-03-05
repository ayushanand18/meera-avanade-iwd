import { Button, Typography, TextField } from "@mui/material";
import {React, useState} from "react";
import axios from 'axios';



export default function App(){
    async function CohereResponse(text){
        const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/generate',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer sRHKLLNre9dF9cwKCXTI9dCzcB8IFpBgcNnlnGfR'
        },
        data: {
            max_tokens: 100,
            return_likelihoods: 'NONE',
            truncate: 'END',
            prompt: text
        }
        };
    
        await axios.request(options)
        .then(function (response) {
            console.log(response.data.generations[0].text);
            answers[number] = response.data.generations[0].text;
            setAnswers(answers);
        })
        .catch(function (error) {
            alert('Error! Please try again after some time.');
            console.error(error);
        });
    }

    const textEnabled = [0, 0, 1];
    const options = [
        [
            "doing good",
            "bad",
            "just fine",
        ],
        [
            "<15",
            "15-25",
            "25-35",
            "35-45",
            "45+"
        ],
        [],
        [],
    ];
    const suggestions = [
        "How should I deal with cramps?",
        "How to soothe my mind during periods?",
    ]
    const [answers, setAnswers] = useState([0, 0, '', '']);
    const [number, setNumber] = useState(0);
    
    const questions = [
        "How are you doing?",
        "What is your age?",
        "Write down your query.",
        "",
    ]
    const liveOptions = options[number].map((opts) =>
        <Button 
        variant="outlined"
        onClick={()=>{
            answers[number] = options[number].indexOf(opts);
            setAnswers(answers);
            setNumber(number+1);
        }}>
            {opts}
        </Button>
    )

    return (
        <div className="chatbotContainer">
            <div className="question" style={{display: number!==3?'block':'none'}}>
                <img
                src="https://www.svgrepo.com/show/94797/chat.svg" 
                alt="message icon" 
                width="30px"/>
                <Typography variant="h4">
                    {questions[number]}
                </Typography>
            </div>
            
            <div className='options'>
                {liveOptions}
            </div>
            
            <div className="suggestion-chips" style={{display: (number===2)?'block':'none'}}>
                {
                suggestions.map(async (suggestion)=>
                    <Button variant="outlined" onClick={async ()=>{
                        await CohereResponse(suggestion);
                        setNumber(number+1);
                    }}>
                        {suggestion}
                    </Button>
                )}
            </div>
            
            <TextField 
                style={{display:textEnabled[number]?'block':'none'}}
                onKeyDown={async (e) => {
                    if(e.key==='Enter'){
                        // set the name to answer
                        console.log('work');
                        await CohereResponse(e.target.value);
                        // increment the question
                        setNumber(number+1);
                        setAnswers(answers);

                        // also clear the text area
                        e.target.value='';
                    }
                }}
            />
            <div className="answer-space" style={{display: number===3?'block':'None'}}>
                <Typography variant="h5">
                    The answer to your query is: {answers[number-1]}.
                </Typography>
                <div className="get-back" onClick={() => {
                    setNumber(number-1);
                    console.log(number);
                }}>
                    
                    <Typography variant="body1">
                        Ask Another Query.
                    </Typography>
                </div>
            </div>
        </div>
    )
}