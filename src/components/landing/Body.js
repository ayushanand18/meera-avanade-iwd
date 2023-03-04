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
                            Geeta helps women know about menstrual hygiene in an anonymised and secured manner to help protect their privacy.
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
                            // image="file/to/path.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    It can help do something
                                </Typography>
                                <Typography variant="body2">
                                    Some detailed information
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card sx={{maxWidth : 280}}>
                        <CardMedia 
                            component="img"
                            alt="benefit-2"
                            height="140"
                            // image="file/to/path.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    It can help do something
                                </Typography>
                                <Typography variant="body2">
                                    Some detailed information
                                </Typography>
                            </CardContent>
                    </Card>
                    <Card sx={{maxWidth : 280}}>
                        <CardMedia 
                            component="img"
                            alt="benefit-3"
                            height="140"
                            // image="file/to/path.jpg"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    It can help do something
                                </Typography>
                                <Typography variant="body2">
                                    Some detailed information
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
                                Point Number 2.
                            </Typography>
                            <Typography variant="body1">
                                This is the point number two.
                            </Typography>
                        </div>

                        <div className="point">
                            <Typography variant="h6">
                                Point Number 3.
                            </Typography>
                            <Typography variant="body1">
                                This is the point number three.
                            </Typography>
                        </div>

                        <div className="point">
                            <Typography variant="h6">
                                Point Number 4.
                            </Typography>
                            <Typography variant="body1">
                                This is the point number fourth.
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