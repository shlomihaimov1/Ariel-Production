import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WOW from 'wow.js';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
		
		new WOW().init();		
	}
	

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row className='footer-content-wrapper'>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<a className="footer-logo" href="/"  target="_blank">
										<img className='footer-logo-img' src="../assets/images/content/Ariel Productions Bg.png" alt="ArielProductionLogo" data-rjs="2" />
									</a>
									<p className='text-direction-rtl'>
										סטודיו בפתח תקווה המתמחה בהקלטות והפקות מוזיקליות
									</p>
									
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="https://www.youtube.com/channel/UC1uqMZI5CLmWaqhjkkLaw_w" target="_blank" title="Youtube"><i className="fab fa-youtube fa-fw"></i></a>
										<a href="https://www.facebook.com/ariel.zurayev" target="_blank" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="https://www.instagram.com/ariel_zurayev/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
										<a href="https://www.tiktok.com/@ariel.zur?_t=8gCSnWhuq01&_r=1" target="_blank" title="Tiktok"><i className="fab fa-tiktok"></i></a>
										<a href="https://wa.me/972542662513"  target="_blank" title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> */}
							{/* <Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									<h6>Useful Links</h6>
									
									<ul className="footer-menu">
										<li><a href="#">Support</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms &amp; Conditions</a></li>
										<li><a href="#">Affiliate Program</a></li>
										<li><a href="#">Careers</a></li>
									</ul>
									
								</div>
							</Col> */}
							
							{/* <!-- Product help --> */}
							{/* <Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
									<h6>Product Help</h6>
									
									<ul className="footer-menu">
										<li><a href="#">FAQ</a></li>
										<li><a href="#">Reviews</a></li>
										<li><a href="#">Features</a></li>
										<li><a href="#">Feedback</a></li>
										<li><a href="#">API</a></li>
									</ul>
									
								</div>
							</Col> */}
							
							{/* <!-- Download --> */}
							{/* <Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
									<h6>Download</h6>
									
									<div className="button-store">
										<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
										<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
									</div>
									
								</div>
							</Col> */}
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © {new Date().getFullYear()} <a href="/" target="_blank">Ariel Production's Team</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>
				
			</footer>
		);
	}

}