import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import emailjs from '@emailjs/browser';

const Contact = (props) => {
    
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [mailContent, setMailContent] = useState('');
    const [isSent, setIsSent] = useState(false);


    function sendMail(e) {
        e.preventDefault();

        // Send mail to ariel
        let contactParams = {
            from_name: fullName,
            phone: phone,
            message: mailContent
        };
      
        emailjs.send('service_8m5287c', 'template_3mqfk29', contactParams, "QeH3OTjAIPQ8rV3zb").then(function (res) {});
    
        setIsSent(true);
        alert("המייל נשלח בהצלחה!");
    }

    return (
        <section id="contact" className='section-contact'>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<div className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center text-direction-rtl">
							<h3>צור קשר</h3>
							<p>השאירו פרטים ואחזור אליכם במהרה.</p>
                        </div>
						
					</div>
				</Row>

				<Row className='contact-rtl'>
					
					{/* <!-- Contact info --> */}
					<Col className="contact-info col-12 col-lg-4 res-margin">
						
                        <h5>
                            <span className="icon icon-basic-geolocalize-05"></span> 
                            כתובת האולפן
                        </h5>
                        <p>
                            פתח תקווה<br />
                            שנקר 13
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-smartphone"></span> 
                            מספר טלפון
                        </h5>
                        <p><a href="tel:0542662513">054-266-2513</a></p>
                      
                        <h5>
                            <span className="icon icon-basic-mail"></span> 
                            כתובת אימייל
                        </h5>
                        <p>
                            <a href="mailto:ariel1098765@gmail.com">ariel1098765@gmail.com</a>
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span> 
                            שעות עבודה
                        </h5>
                        <p className='text-direction-rtl'>
                            24 שעות ביממה למשך כל השבוע
                        </p>
                        
					</Col>
					
					{/* <!-- Contact form --> */}
					<Col className="col-12 col-lg-8">
						
                        <form id="contact-form" onSubmit={sendMail}>                             
                            
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input onChange={(e) => {setFullName(e.target.value)}} type="text" name="name" className="form-control field-name" placeholder="שם מלא" required/>
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input onChange={(e) => {setPhone(e.target.value)}} type="tel" name="phone" className="form-control field-email" placeholder="מספר טלפון" required/>
                                    </div>
                                </Col>                                
                            </Row>
                            
                
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea onChange={(e) => {setMailContent(e.target.value)}} name="message" rows="4" className="form-control field-message" placeholder="תוכן הפנייה" ></textarea>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button onSubmit={sendMail} type="submit" id="contact-submit" name="send" className="btn">שלח מייל</button>
                                </Col>
                            </Row>
                            
                        </form>
                        
                      
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Contact;