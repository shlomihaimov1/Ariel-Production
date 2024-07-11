import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu';

// React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuLeftAlt } from "react-icons/cg";

import { FaHome, FaInfoCircle, FaHeadphones, FaMoneyBill, FaStar, FaEnvelope } from "react-icons/fa";


export default function Navbar() {

    // States
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        console.log('damnnn')
    };

    const closeMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div className='justify-content-center'>
                    {!isTabletOrMobile ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#landingsection">בית</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#about">אודות</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#covers">קאברים שהפקתי</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#pricing">תהליך ההקלטה</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#thanks">פירגונים מלקוחות</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-links" href="/#contact">צור קשר</a>
                            </li>
                        </ul>
                    ) : (
                        <div>
                            <div>
                                <RxHamburgerMenu onClick={toggleMenu} className='burger-icon' />
                            </div>

                            {isOpenMenu && (
                                <Menu right isOpen={isOpenMenu}>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#landingsection" onClick={closeMenu}>
                                            <FaHome className="nav-icon" /> בית
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#about" onClick={closeMenu}>
                                            <FaInfoCircle className="nav-icon" /> אודות
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#covers" onClick={closeMenu}>
                                            <FaHeadphones className="nav-icon" /> קאברים שהפקתי
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#pricing" onClick={closeMenu}>
                                            <FaMoneyBill className="nav-icon" /> תהליך ההקלטה
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#thanks" onClick={closeMenu}>
                                            <FaStar className="nav-icon" /> פירגונים מלקוחות
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-links" href="/#contact" onClick={closeMenu}>
                                            <FaEnvelope className="nav-icon" /> צור קשר
                                        </a>
                                    </li>
                                </Menu>
                            )}
                        </div>
                    )}
                </div>

                <a href='/' target="_blank"><img className="navbar-logo" src="../assets/images/content/Ariel Productions Bg.png" alt="Logo" /></a>
            </nav>
        </div>
    );
}



