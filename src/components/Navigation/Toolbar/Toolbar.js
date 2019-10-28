import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENUs</div>
        <Logo height="80%" />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;