import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = () => {
    //...
    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;