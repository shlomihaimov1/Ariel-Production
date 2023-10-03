import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            
            <h3 className='clients-title'>חלק מהלקוחות שלי</h3>
            <p className='clients-sub-title'>במהלך עבודתי יצא לי לעבוד עם לא מעט חברות וזמרים מהתעשייה</p>
            
            {/* <!-- Container --> */}
            <Container>            

                <Row>

                    <Swiper
                        className="clients-slider"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 3
                            },
                            1024: {
                                spaceBetween: 40,
                                slidesPerView: 5
                            }
                        }}
                    >

                        {/* <!-- Client 1 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/partner.png" alt="Client 1" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/yossigavni.png" alt="Client 2" />
                            </a>
                        </SwiperSlide>

                         {/* <!-- Client 8 --> */}
                         <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/mor.jpeg" alt="Mor Reviey" />
                            </a>
                        </SwiperSlide>
                        
                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/radiosol.png" alt="Client 4" />
                            </a>
                        </SwiperSlide>
                    

                        {/* <!-- Client 9 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/shaked.jpeg" alt="Shaked komemy" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/ort.png" alt="Client 3" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 5 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/reshonlezion.png" alt="Client 5" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 6 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/educationoffice.png" alt="Client 6" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 7 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="../assets/images/content/companys/electricitycompany.png" alt="Client 7" />
                            </a>
                        </SwiperSlide>

                       

                    </Swiper>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Clients;