import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default function Navbar() {


    return (
        <div>
            <nav className="navbar">

                <div className='justify-content-center'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link nav-links" href="/#landingsection">בית</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-links" href="/#about">אודות</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-links" href="/#pricing">מחירים ומבצעים</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-links" href="/#contact">צור קשר</a>
                        </li>
                    </ul>
                </div>

                <a href='/' target="_blank"><img className="navbar-logo" src="../assets/images/content/Ariel Productions Bg.png" alt="Logo" /></a>
            </nav>
        </div>
    );
}



