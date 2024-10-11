import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import Logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className="footer-main">
                    <div className="footer-left">
                        <img src={Logo} alt="" />
                        <p className="copyright">
                        © 2023 <span> Filmlane</span>
                        .All Rights Reserved by 
                        <span> Tan Phat</span>
                        </p>
                    </div>

                    <ul className="footer-right">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/movie'>MOVIE</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Footer;