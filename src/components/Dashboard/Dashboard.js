  import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


import './Dashboard.css';

const Dashboard = props => (
    <header className="toolBar">
 
        <nav className="toolBarNavigation">
            <div>
            <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolBarLogo"><a href="/">Pixie Shire</a></div>
            <div className="spacer"></div>
     
            </nav>
            </header>

);

export default Dashboard;
