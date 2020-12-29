import React from 'react'
import '../App.css';
import '../styles/Hero.css';


function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video_2.mp4" autoPlay loop muted/>
            <h1> Hi, I'm Jorge, a Software Engineering Student</h1>
            <h2> An Entrepreneur Looking to Bring New Ideas to Life </h2>
        </div>
    )
}



export default Hero
