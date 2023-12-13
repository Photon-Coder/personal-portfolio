import React, {useEffect} from 'react';

import Main from './main';
import Nav from './nav';

import '../css/style.css';

const Index = () => {
    return (
        <React.Fragment>
            <Nav />
            <Main />
        </React.Fragment>
    );
};

export default Index;