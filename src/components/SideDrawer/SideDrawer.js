import React from 'react';
import './SideDrawer.css';


const SideDrawer = props => { 

    let drawerClasses =  'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }

    return (
    <nav className={drawerClasses} >
        <ul>
            <li>< a href="/">About</a></li>
            <li>< a href="/">Home</a></li>
            <li>< a href="/">Bills</a></li>
            <li>< a href="/">Settings</a></li>
            <li>< a href="/ContactForm">Invite Roommates</a></li>
            <li>< a href="/">Sign Out</a></li>

        </ul>
    </nav>

);

};

export default SideDrawer;