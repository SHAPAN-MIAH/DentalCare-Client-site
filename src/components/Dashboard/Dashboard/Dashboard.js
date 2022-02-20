import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import logo from "../../../images/0001036-dental-logo-maker-dentist-Logo-02.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faCog, faUserPlus, faArrowAltCircleDown, faHome, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 260;

const Dashboard = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='nastedRoute-container'>
      <h3 className='ml-5 mt-3 mb-3'>
        <img style={{ width: "30px" }} src={logo} />
        <span> DentalCare</span>
      </h3>

      <Divider />
      <div className='ml-5 mt-4'>
        <Link className='text-white routeLink' to='/'><FontAwesomeIcon icon={faHome} />  Home</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to='/appointment'><FontAwesomeIcon icon={faFileAlt} />  Appointment</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to={`${url}`}><FontAwesomeIcon icon={faCalendar} />  Appointment List</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUsers} /> Make an Admin</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to={`${url}/addDoctor`}><FontAwesomeIcon icon={faUserPlus} /> Add Doctor</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to={`${url}/Setting`}><FontAwesomeIcon icon={faCog} /> Setting</Link>
        <br/>
        <br/>
        <Link className='text-white routeLink' to={`${url}/Setting`}><FontAwesomeIcon icon={faArrowAltCircleDown} /> LogOut</Link>
      </div>
        
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <section className="dashboard-container container-fluid">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    className='dashboardHeader'
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" noWrap component="div">
                        <h3 className='DashboardTitle mt-2 ml-3'>Dashboard</h3>
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    
                    <Switch>
                      <Route exact path={path}>
                        <DashboardHome/>
                      </Route>
                      <Route path={`${path}/makeAdmin`}>
                        admin
                      </Route>
                    </Switch>
                </Box>
            </Box>
        </section>
    );
};
Dashboard.propTypes = {
    window: PropTypes.func,
  };

export default Dashboard;
