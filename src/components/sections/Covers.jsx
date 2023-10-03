import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ModalVideo from 'react-modal-video';

// CSS
import 'react-modal-video/css/modal-video.css';
import 'react-modal-video/scss/modal-video.scss';


// React Icons
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const Covers = () => {
    
  
    // Constants
    const listOfCovers = ['RCdcrYHYCGU', 'Wg9-wPcW4GM', 'GALHbLMtb_8', 'U3b2S19h9s8', 'IuBBRHSk9Eg']

    // Refs
    const parallax = useRef(null);

    // States
    const [videoId, setVideoId] = useState(listOfCovers[0]);
    const [isOpen, setOpen] = useState(false);


    // UseEffect
    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    // --- Functions
    const switchCover = () => {
        let indexVid = 0;
        let index = 0;

        listOfCovers.forEach((oldVid) => {
            index += 1
    
            if(oldVid===videoId) {
                indexVid = index
            }
        })

        if(indexVid===5) {
            indexVid = 0;
        }
   
        setVideoId(listOfCovers[indexVid]);
    }

    const switchCovePrev = () => {
        let indexVid = 0;
        let index = 0;

        listOfCovers.forEach((oldVid) => {
            index += 1
    
            if(oldVid===videoId) {
                indexVid = index
            }
        })
     
        indexVid -= 2
       
        if(indexVid===-1) {
            indexVid = 4;
        }

        setVideoId(listOfCovers[indexVid]);
    }


    return (
        <>
            <div className='cover-wrapper'>
                <h3 id='covers' className='cover-main-title'>קאברים שהפקתי</h3>
                {/* <p className='pricing-main-sub-title'>לבירור מומלץ לשוחח איתי טלפונית</p> */}

                <ModalVideo channel='youtube' videoId={videoId} autoplay youtube={{ autoplay: 1, mute: 0 }} isOpen={isOpen} onClose={() => setOpen(false)} />
                
                <section id="parallax-video" className="parallax cover-wrapper-parallax" data-image="../assets/images/content/ulpan.jpeg" ref={parallax}>
            
                    {/* <!-- Overlay --> */}
                    <div className="overlay" />

                    {/* <!-- Container --> */}
                    <Container>
                       
                        <Row>
                            
                            <div className="video-btn wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">              
                
                                {/* <!-- Play button --> */}
                                <a onClick={(e)=> {
                                    e.preventDefault();
                                    return setOpen(true)
                                }} href="#" data-rel="lightcase" className="play-btn">
                                    <i className="fas fa-play"></i>
                                </a>

                                {isOpen && (
                                    <>
                                        <div className='cover-button-prev'>
                                            <BsChevronLeft className='cover-button' onClick={switchCovePrev}></BsChevronLeft>
                                        </div>

                                        <div className='cover-button-next'>
                                            <BsChevronRight className='cover-button' onClick={switchCover}></BsChevronRight>
                                        </div>
                                    </>
                                )}
                            </div>

                        </Row>
                    </Container>

                </section>
            </div>
        </>
    );
}

export default Covers;