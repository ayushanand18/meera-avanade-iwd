import { Button, ButtonGroup, CardContent, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import HeroImage from '../../static/images/hero-image.svg';
import './style.css';

export default function App(){
    return (
        <div className="bodyContainer">
            {/* first hero section - Try Now link and the landing */}
            <section className="hero-section">
                <div className="wrapper">
                    <div className="header-text">
                        <Typography variant="h3">
                            Helping women with healthy hygiene
                        </Typography>
                        <Typography variant="body1">
                            Meera helps women know about menstrual hygiene in an anonymised and secured manner to help protect their privacy.
                        </Typography>
                        <ButtonGroup>
                            <Button variant="contained" href="/chat">Try Now For Free</Button>
                        </ButtonGroup>
                    </div>
                    <div className="hero-image-container">
                        <img src={HeroImage} className="image" alt="women" width="48%" maxWidth="450px"/>
                    </div>
                </div>
            </section>

            {/* second section now  */}
            <section className="light-themed">
                <Typography variant='h3'>
                    Safe and Anonymous
                </Typography>
                <div className="content">
                    <Typography variant="body1">
                        With 100% security and privacy with no logins or signups - we don't track you or 
                        save any details.
                    </Typography> 

                    <Card sx={{maxWidth : 280}}>
                        <CardMedia 
                            component="img"
                            alt="benefit-1" // feature not benefit
                            height="140"
                            image="https://static.vecteezy.com/system/resources/previews/000/696/497/non_2x/wire-low-poly-cyber-lock-security-padlock-vector.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Secured with encryption, and no third party apps.
                                </Typography>
                                <Typography variant="body2">
                                    We neither take your personal data, let alone storing or sharing with third-party agents.
                                    When you chat with Meera, it answers everything locally on your device and no information is stored on our servers.
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card sx={{maxWidth : 280}}>
                        <CardMedia 
                            component="img"
                            alt="benefit-2"
                            height="140"
                            image="https://img.freepik.com/free-vector/person-different-ages_23-2148422958.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Get information right for your age group.
                                </Typography>
                                <Typography variant="body2">
                                    For every query or question you ask Meera, she will ask you about your age group so that she can advise the best for your body.
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card sx={{maxWidth : 280}}>
                        <CardMedia 
                            component="img"
                            alt="benefit-3"
                            height="140"
                            image="https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Feels human but it isn't
                                </Typography>
                                <Typography variant="body2">
                                    Meera makes your experience as human as possible but without a human in between so that you don't feel shy or any form of discomfort.
                                </Typography>
                            </CardContent>
                    </Card>
                </div>
            </section>

            {/* section 3 - Benefits */}
            <section className="benefits dark-themed">
                <div className="wrapper-container"> 
                    {/* wrap a full box like eden.app */}
                    <Typography variant="h3"> Top benefits </Typography>
                    <div className="points">
                        <div className="point">
                            <Typography variant="h6">
                                Totally anonymous!
                            </Typography>
                            <Typography variant="body1">
                                You are in control of the data your create. No logins, no signups just meaningful information!
                            </Typography>
                        </div>

                        <div className="point">
                            <Typography variant="h6">
                                Powered with LLMs.
                            </Typography>
                            <Typography variant="body1">
                                Large Language Models are the talk of the town. To enhance user experience Meera uses Co:here LLM API.
                            </Typography>
                        </div>

                        <div className="point">
                            <Typography variant="h6">
                                Simplistic and minimal. Period.
                            </Typography>
                            <Typography variant="body1">
                                No heavy onboarding process, no tons of questions, no card-based dashboards - just a simple prompt and a query box is all you need.
                            </Typography>
                        </div>

                        <div className="point">
                            <Typography variant="h6">
                                This is not a screening interview.
                            </Typography>
                            <Typography variant="body1">
                                This is not your interview where you will be asked tons of question before moving you to the right answer. So simple flow that even a 6 year old can use Meera to get solutions.
                            </Typography>
                        </div>

                    </div>
                </div>
            </section>
            {/* section 4 - the pitch video */}
            <section className="video-pitch light-themed">
                <Typography variant="h3">
                    Look at the demo
                </Typography>
                <Typography variant="body1">
                    {/* also have info about the pitch video */}
                    View a live demo before trying yourself.
                    <div className="youtubeEmbed">
                        {/* embed the youtube video here */}
                    </div>
                </Typography>
            </section>
        </div>
    )
}