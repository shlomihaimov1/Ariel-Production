import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ErrorPage = (props) => {
    return (
        <section id="error-page" className="d-flex align-items-center min-vh-100 text-direction-rtl">

        	<Container>
		
				{/* Message */}
				<Row>
					<Col className="col-12 text-center">
                        
						{/* Title */}
						<div className="img-fill-available icon largest colored">
                            <i className="fas fa-unlink"></i>
                        </div>
						
						<div className="empty-30"></div>
						
						<h2>משהו השתבש!</h2>
						
						{/* Primary text */}
						<p className="info">
							הדף אשר אליו את/ה מנסה להגיע אינו קיים.
						</p>
						
						<p>
							<a href="/" className="btn btn-default btn-rounded">
                                <i className="fas fa-chevron-left"></i> תחזירו אותי אחורה
                            </a>
						</p>

                    </Col>
				</Row>
			
        	</Container>

    	</section>
    );
}

export default ErrorPage;