import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import '../css/side.css'

const Side = () => {
    return (
        <React.Fragment>
            <side>
                <div className='logo'>
                    Logo
                </div>
                <div className='introduction'>
                    소개
                </div>
                <div className='make-site'>
                    Git hub
                </div>
           </side>
        </React.Fragment>
    );
};

export default Side;