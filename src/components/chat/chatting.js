import { Button, Typography, TextField } from "@mui/material";
import {React, useState} from "react";
import axios from 'axios';

const preData = "Menstruation (also called your “period”) is a normal biological process experienced by millions around the world each month. Your period happens when your uterus sheds blood and tissue from the uterine lining and leaves your body through your vagina.\
Practice Healthy Habits During Your Period\
Good menstrual health and hygiene practices can prevent infections, reduce odors and help you stay comfortable during your period.\
You can choose many types of menstrual products to absorb or collect blood during your period, including sanitary pads, tampons, menstrual cups, menstrual discs, and period underwear. Follow these tips when you are using menstrual products, in addition to instructions that come with the product:\
Wash your hands before and after using the restroom and before using a menstrual product.\
Discard used disposable menstrual products properly: wrap them with toilet paper, a tissue, or other material and then toss in a trash bin. Do not flush menstrual products down the toilet.\
Sanitary pads: Change sanitary pads every few hours, no matter how light the flow. Change them more frequently if your period is heavy.\
Tampons: Change tampons every 4 to 8 hours. Do not wear a single tampon for more than 8 hours at a time.\
Use the lowest-absorbency tampon needed. If you can wear one tampon for up to 8 hours without changing, the absorbency may be too high.\
Menstrual cups: Clean cups every day after use. Sanitize menstrual cups after your period is over by rinsing them thoroughly and then placing them in boiling water for one to two minutes.\
Period underwear: Most reusable period underwear is machine washable. Follow product directions on the best way to clean.\
Menstrual Hygiene Is Key in Promoting Good Health\
These hygiene practices can help you stay healthy and comfortable during your period:\
Wear lightweight, breathable clothing (such as cotton underwear). Tight fabrics can trap moisture and heat, allowing germs to thrive.\
Change your menstrual products regularly. Trapped moisture provides a breeding ground for bacteria and fungi. Wearing a pad or period underwear for too long can lead to a rash or an infection.\
Keep your genital area clean. Wash the outside of your vagina and bottom every day. When you go to the bathroom, wipe from the front of your body toward the back, not the other way. Use only water to rinse your vulva. The vagina is a self-cleaning organ. Changing the natural pH balance of your vagina by washing or using chemicals to cleanse out the vagina can be harmful and may result in yeast infection or bacterial vaginosis.\
Use unscented toilet paper, tampons, or pads. Scented hygiene products can irritate the skin and impact your natural pH balance.\
Drink enough liquids. This can help wash out your urinary tract and help prevent infections, like vaginal candidiasis.\
Track and monitor your period. Your menstrual cycle is a valuable marker for your overall health. Irregular periods can be a sign of conditions like diabetes, thyroid dysfunction, and celiac disease. You can track your period on a calendar or with an app on your phone designed for this purpose.\
Visit a healthcare provider for your annual check-up. An annual well-woman exam is a full check-up includes a pap smear, a pelvic exam, and a breast exam. These exams are essential for good reproductive health as they can catch early signs of cancer or other health issues.\
Talk to a doctor if you experience a change in odor, have extreme or unusual pain, or have more severe period symptoms than usual (such as a heavier flow or longer period).\
Menstruation is a natural fact of life and a monthly occurrence for the 1.8 billion girls, \
women, transgender men and non-binary persons of reproductive age. Yet millions of \
menstruators5 across the world are denied the right to manage their monthly menstrual\
cycle in a dignified, healthy way."

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
            prompt: 'Answer: '+preData+'Question: '+text
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
                suggestions.map((suggestion)=>
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
                    {answers[number-1]}
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