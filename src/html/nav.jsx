import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {setupNav} from '../js/nav';
import '../css/style.css';

const Nav = () => {
    useEffect(() => {
        setupNav();
      }, []);

    return (
        <React.Fragment>
            <nav className='navigation'>
                <ul>
                    <li className='list active'>
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
                    <li className='list'>
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
                    <li className='list'>
                        <b></b>
                        <b></b>
                        <Link to='/'>
                            <span className='icon'>
                                <ion-icon name="logo-github"></ion-icon>
                            </span>
                            <span className='title'>
                                Git Hub
                            </span>
                        </Link>
                    </li>
                    <li className='list'>
                        <b></b>
                        <b></b>
                        <Link to='/'>
                            <span className='icon'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </span>
                            <span className='title'>
                                Youtube
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