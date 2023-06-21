import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// CSS
import '../../css/home.css';


// Components
import ContactPopUp from './contactpopup';


export default function LandingSection() {


    return (
        <div>
            <section id='pricing' className='pricing'>
                <h3 className='pricing-main-title'>מחירים ומבצעים</h3>
                <p className='pricing-main-sub-title'>לבירור מומלץ לשוחח איתי טלפונית</p>

                <div className='mask-pricing'>
                    <div className='pricing-wrapper'>
                        <img className='batul1' src='../assets/images/content/ariel3.jpg'></img>
                    </div>
                    <div className='pricing-wrapper pricing-content'>
                        <div className='pricing-content-div'>
                            <p className='pricing-title'>מחירון:</p>
                            <p className='pricing-sub-title'>שיר: ₪450</p>
                            <p className='pricing-sub-title'>ברכות משפחה: ₪300</p>
                            <p className='pricing-sub-title'>דרשה: ₪250</p>
                            <p className='pricing-sub-title'>ברכת כלה: ₪300</p>
                            <p className='pricing-sub-title'>שיר משפחתי עד 4 אנשים: ₪600</p>
                            <p className='pricing-warning'>המחירים עלולים להשתנות בהתאם למבצעי החודש.</p>
                        </div>

                        <div>
                            <p className='pricing-title'>קצת על אופן ביצוע ההקלטה:</p>
                            <p className='pricing-sub-title'><b>1.</b> נבחר את השיר אותו נרצה לבצע</p>
                            <p className='pricing-sub-title'><b>2.</b> נשמע את השיר כמה שיותר לפני ההגעה לאולפן</p>
                            <p className='pricing-sub-title'><b>3.</b> מגיעים לאולפן</p>
                            <p className='pricing-sub-title'><b>4.</b> נתאים את הטון של השיר אליכם</p>
                            <p className='pricing-sub-title'><b>5.</b> נכנסים להקליט ,טייק אחר טייק</p>
                            <p className='pricing-sub-title'><b>6.</b> וסיימנו נערוך את ההקלטה שלכם</p>
                            <p className='pricing-sub-title'><b>7.</b> השיר מוכן וישלח אליכם</p>
                        </div>
                    </div>
                </div>
            </section>



            <ContactPopUp />
        
        </div>
    );
}



