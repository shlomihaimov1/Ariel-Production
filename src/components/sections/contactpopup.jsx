// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// import emailjs from '@emailjs/browser';

// const Contact = (props) => {

//     const [fullName, setFullName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [mailContent, setMailContent] = useState('');
//     const [isSent, setIsSent] = useState(false);


//     // Functions

//     // Close pop up
//     function quitPopup() {
//         document.getElementById('contact-popup').style.display = 'none';
//     }

//     function sendMail(e) {
//         e.preventDefault();

//         // Disable submit button
//         document.getElementById('contact-submit').disabled = true;

//         // Send mail to ariel
//         let contactParams = {
//             from_name: fullName,
//             phone: phone,
//             message: mailContent
//         };
      
//         emailjs.send('service_8m5287c', 'template_3mqfk29', contactParams, "QeH3OTjAIPQ8rV3zb").then(function (res) {});
    
//         setIsSent(true);
//     }


//     return (
//         <div className='contact-popup-wrapper'>
        
//             { !isSent && (
//             <section id="contact-popup" className='contact-popup wow'>
                
//                 {/* Close Pop Up */}
//                 <div className="close-contact-popup-wrapper">   
//                     <span onClick={quitPopup} className="close-contact-popup" title="סגור">&times;</span>
//                 </div>

//                 {/* <!-- Container --> */}
//                 <div>
                    
//                     {/* <!-- Section title --> */}
//                     <div className="justify-content-center row-popup">
//                         <div>        
//                             <div className="text-center text-direction-rtl">
//                                 <h3 className='contact-popup-title'>צור קשר</h3>
//                                 <p className='contact-popup-sub-title'>השאירו פרטים ואחזור אליכם במהרה.</p>
//                             </div>      
//                         </div>
//                     </div>

//                     <Row className='contact-rtl'>
                        
                        
//                         {/* <!-- Contact form --> */}
//                         <Col className="col-12-popup col-lg-8-popup">
                            
//                             <form id="contact-poppup-form" onSubmit={sendMail}>                             
                                
//                                 <div className='row-popup'>
//                                     <Col className="col-12-popup col-lg-6-popup sub-row-popup">
//                                         <div className="form-group mt-2 mb-3">
//                                             <input onChange={(e) => {setFullName(e.target.value)}} type="text" name="name" className="form-control-popup field-name" placeholder="שם מלא" required/>
//                                         </div>
//                                     </Col>
//                                     <Col className="col-12-popup col-lg-6-popup">
//                                         <div className="form-group mt-2 mb-3">
//                                             <input onChange={(e) => {setPhone(e.target.value)}} type="tel" name="phone" className="form-control-popup field-email" placeholder="מספר" required/>
//                                         </div>
//                                     </Col>                                
//                                 </div>
                                
//                                 <div className='row-popup'>
//                                     <Col className="col-12-popup col-lg-12-popup">
//                                         <div className="form-group mt-2 mb-3">
//                                             <textarea onChange={(e) => {setMailContent(e.target.value)}} name="message" rows="4" className="form-control-popup field-message" placeholder="תוכן הפנייה"></textarea>
//                                         </div>
//                                     </Col>
//                                 </div>
                                
//                                 <div className='row-popup'>
//                                     <Col className="col-12-popup col-lg-12-popup mt-2">
//                                         <button onSubmit={sendMail} type="submit" id="contact-submit" name="send" className="btn">שלח</button>
//                                     </Col>
//                                 </div>
                                
//                             </form>
                            
//                         </Col>
                        
//                     </Row>
                    
//                 </div>
                
//             </section>
//             )}

//             {/* <!-- Submit Results --> */}
//             { isSent && (
//                 <div className="contact-popup wow contact-form-result">
//                     <h4>Thank you for the e-mail!</h4>
//                     <p>Your message has already arrived! We'll contact you shortly.</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Contact;