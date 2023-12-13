import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { setupNav } from '../components/Nav';
import '../css/style.css';
import Logo from '../img/Logo.jpeg';

const Nav = () => {
    const location = useLocation();
    
    useEffect(() => {
        setupNav();
    }, []);

    return (
        <React.Fragment>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link to='/'>
                            <span className='logo'>
                                <img src={Logo} alt='Logo' />
                            </span>
                            <span className='title'>
                                GY Profile
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/'>
                            <span className='icon'>
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className='title'>
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/introduction' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/introduction'>
                            <span className='icon'>
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span className='title'>
                                소개
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/github' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/github'>
                            <span className='icon'>
                                <ion-icon name="logo-github"></ion-icon>
                            </span>
                            <span className='title'>
                                Git Hub
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/youtube' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/youtube'>
                            <span className='icon'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </span>
                            <span className='title'>
                                Youtube
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/docker' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/docker'>
                            <span className='icon'>
                                <ion-icon name="logo-docker"></ion-icon>
                            </span>
                            <span className='title'>
                                Docker
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${location.pathname === '/mail' ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to='/mail'>
                            <span className='icon'>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <span className='title'>
                                Mail
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='toggle'>
                <ion-icon name="menu-outline" className='open'></ion-icon>
                <ion-icon name="close-outline" className='close'></ion-icon>
            </div>
        </React.Fragment>
    );
};

export default Nav;