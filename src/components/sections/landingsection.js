import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// CSS
import '../../css/home.css';


// Components
import NavBar from '../sections/navbar.js'
import Video from '../sections/video1.js';
import ContactPopUp from './contactpopup';

export default function LandingSection() {


    return (
        <div>
            <section id='landingsection' className='main-section' >
                <NavBar />

                <Container className='main-container landing-section-container'>
                    {/* <Col className='column sub-container-video'>
                        <Video />
                    </Col> */}

                    <Col className='column sub-container-intro'>
                        <p className='main-title'>Ariel Productions</p>
                        <p className='sub-title'>אולפן הקלטות המתמחה בהקלטת שירים, ברכות, דרשות, ברכות כלה, כתיבה, הלחנה, עיבוד והפקה מוזיקלית.</p>
                        
                        {/* <!-- Social links --> */}
                        <div className="footer-social landing-section-icons">
                            <a href="https://www.youtube.com/channel/UC1uqMZI5CLmWaqhjkkLaw_w" target="_blank" title="Youtube"><i className="fab fa-youtube fa-fw"></i></a>
                            <a href="https://www.facebook.com/ariel.zurayev" target="_blank" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
                            <a href="https://www.instagram.com/ariel_zurayev/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.tiktok.com/@ariel.zur?_t=8gCSnWhuq01&_r=1" target="_blank" title="Tiktok"><i className="fab fa-tiktok"></i></a>
                            <a href="https://wa.me/972542662513"  target="_blank" title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </Col>

                </Container>

                
            </section>

            <section id='about' className='about'>
                <div className='mask-about'>
                    <div className='about-wrapper'>
                        <img className='batul1' src='../assets/images/content/batul2.jpg' alt='אולפן הקלטות, אריאל הפקות, סינגלים לאירועים, הקלטת שירים, בר מצווה, חתונה, דרשות, ברכות, אולפן הקלטות בפתח תקווה, כתיבה והלחנה'></img>
                    </div>
                    <div className='about-wrapper about-content'>
                        <div>
                            <p className='about-title'>קצת עליי:</p>
                            <p className='about-sub-title'>שמי אריאל, אני מפיק ומעבד מוזיקלי.
                                                            בעל ניסיון רב ועוסק בתחום המוזיקה קרוב ל-10 שנים, 
                                                            בעזרת טכנולוגיה מתקדמת מאוד
                                                            ומאה אחוז סבלנות אני מגיע
                                                            לתוצאה הטובה ביותר.
                            </p>
                            <p className='about-sub-title'>
                                                            הסלוגן שלי הוא "אצלי כל אחד יוצא זמר".
                                                            לאחר עבודה עם עשרות לקוחות ביום
                                                            אני יודע בדיוק מה צריך לעשות כדי שבאמת
                                                            כל אחד יצא זמר.
                            </p>
                        </div>

                        <div>
                            <p className='about-title'>הקלטת שירים:</p>
                            <p className='about-sub-title'>
                                כדי להגיע לתוצאה הטובה ביותר , צריך ללכת יד ביד לאורך הדרך, לסמוך עלי וכמובן לשתף פעולה.
                            </p>
                            <p className='about-sub-title'>
                                זמן ההקלטה באולפן אורך עד כשעה וחצי 
                                ובסופו של דבר, נגיע לתוצאה מדהימה.
                            </p>
                        </div>

                        {/* <Col className='column sub-container-video'>
                            <Video />
                        </Col> */}
                    </div>
                </div>
            </section>



            <ContactPopUp />
        
        </div>
    );
}



