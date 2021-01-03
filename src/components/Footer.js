import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href="https://www.linkedin.com/in/jorge-f/">LinkedIn</a>
                        <a href="https://github.com/JorgeF010" >Github</a>
                        <a href="https://drive.google.com/file/d/1ckCP7RzXyjSJ1x0Rt1OR1fob6U9F_YQT/view?usp=sharing">Resume</a>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
