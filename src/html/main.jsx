import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import '../css/style.css';

const Main = () => {
    return (
        <React.Fragment>
            <main>
                <span className='my'>
                    I'm a
                </span>
                <ul className='job'>
                    <li>
                        <span>
                            Developer
                        </span>
                    </li>
                    <li>
                        <span>
                            Freelancer
                        </span>
                    </li>
                    <li>
                        <span>
                            Designer
                        </span>
                    </li>
                    <li>
                        <span>
                            Youtuber
                        </span>
                    </li>
                </ul>
            </main>
        </React.Fragment>
    );
};

export default Main;