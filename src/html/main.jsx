import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import '../css/main.css'

const Main = () => {
    return (
        <React.Fragment>
            <main>
                <div className='my'>
                    I'm
                </div>
                <div className='job'>
                    Developer
                </div>
            </main>
        </React.Fragment>
    );
};

export default Main;