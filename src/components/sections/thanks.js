import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// CSS
import '../../css/home.css';

// Components

// images
import img1 from '../../assets/images/content/thanks/thanks_one.jpg'
import img2 from '../../assets/images/content/thanks/thanks_two.jpg'
import img3 from '../../assets/images/content/thanks/thanks_three.jpg'
import img4 from '../../assets/images/content/thanks/thanks_four.jpg'
import img5 from '../../assets/images/content/thanks/thanks_five.jpg'
import img6 from '../../assets/images/content/thanks/thanks_six.jpg'



export default function LandingSection() {

    return (
        <section id='thanks' className='thanks-section' >
            <div className='thanks-column-wrapper'>
                <img className='thanks-imgs' src={img1} alt="Thanks 1" />
                <img className='thanks-imgs' src={img2} alt="Thanks 2"/>
            </div>

            <div className='thanks-column-wrapper'>
                <img className='thanks-imgs' src={img3} alt="Thanks 3" />
                <img className='thanks-imgs' src={img4} alt="Thanks 4" />
            </div>

            <div className='thanks-column-wrapper'>
                <img className='thanks-imgs' src={img5} alt="Thanks 5" />
                <img className='thanks-imgs' src={img6} alt="Thanks 6" />
            </div>
        </section>
    );
}



