import React from 'react';

import IntM from './intM';
import Nav from './nav';

import '../css/style.css';

const Introduction = () => {
    return (
        <React.Fragment>
            <Nav />
            <IntM />
        </React.Fragment>
    );
};

export default Introduction;