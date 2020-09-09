import React from 'react';

import Dp from './../images/dp.jpeg'

const About = () => {
    return (
        <div className='about-container'>
            <div><b>About Me</b></div>
            <div>
                <img src={Dp} alt='profile pic' class='about-img'/>
            </div>
            <div><b>Name</b> : Aquif Zubair</div>
            <div>
                I am working as a <b>Javascript</b> Full Stack Developer Trainee 
                in a company named <b>Mountblue Technology</b>. I am a Bachelor of 
                Engineering graduate in computer science from Sant Longowal Institute
                of Engineering and Technology. I have done Diploma in Electronics
                Engineering from Aligarh Muslim  University. I was born and raised in 
                Hajipur,Bihar and did my schooling from there. I love to Play Badminton, Carrom
                and recite poetry.
            </div>
            <div>You Can find more details about me on my portfolio Link: 
                <a href='https://azubairportfolio.netlify.app/' target='_blank' rel="noopener noreferrer"> Portfolio Link </a>
            </div>
        </div>
    )

}

export default About;