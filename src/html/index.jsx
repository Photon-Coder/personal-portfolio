import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import Side from './side';
import Main from './main'

import '../css/index.css';

const Index = () => {
    return (
        <React.Fragment>
            <Side />

            <Main />
        </React.Fragment>
    );
};

export default Index;