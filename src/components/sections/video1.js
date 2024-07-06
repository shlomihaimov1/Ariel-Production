import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';

// CSS
import 'react-modal-video/css/modal-video.css';
import 'react-modal-video/scss/modal-video.scss';

import img_main from '../../assets/images/content/ariel_teach.jpg';
import img_secondary from '../../assets/images/content/ariel_second.jpg';


const ParallaxVideo = ({ url, state }) => {
    const parallax = useRef(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <ModalVideo
                channel='custom'
                url={`${url}autoplay=1`}
                isOpen={isOpen}
                onClose={() => setOpen(false)}
            />

            <section id="parallax-video" className={`parallax ${state === 'main' ? 'parallax-custom' : 'parallax-custom-secondary'}`} style={{ height: '100%', width: '80%' }} data-image={state==='main' ? img_main : img_secondary} ref={parallax}>
                {/* Overlay */}
                <div className="overlay" />

                {/* Container */}
                <div className='overlay-subwrapper'>
                    <Row>
                        <div className="video-btn wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
                            {/* Play button */}
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOpen();
                                }}
                                href="#"
                                data-rel="lightcase"
                                className="play-btn"
                            >
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default ParallaxVideo;
