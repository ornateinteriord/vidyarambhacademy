import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import kidslogo from "../../assets/kidzena-red.png";
import "./Navbar.css";

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar className="toolbar">
                <Box>
                    <img src={kidslogo} alt="Kidzena" className="logo" />
                </Box>

                <Box className="nav-links">
                    <Link to={'/'}><Button>Home</Button></Link>
                    <Link to={'/about'}><Button>About</Button></Link>
                    <Link to={'/classes'}><Button>Classes</Button></Link>
                    <Button onClick={handleMenuOpen}>Pages ▼</Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}><ScrollLink to="activities" smooth={true} duration={800}>Activities</ScrollLink></MenuItem>
                        <Link  className="navLink" to={'/testimonials'}><MenuItem onClick={handleMenuClose}>Testimonials</MenuItem></Link>
                        <MenuItem onClick={handleMenuClose}><ScrollLink to="moments-section" smooth={true} duration={800}>Moments</ScrollLink></MenuItem>
                        <Link  className="navLink" to={'/faqs'}><MenuItem onClick={handleMenuClose}>FAQs</MenuItem></Link>
                        <MenuItem onClick={handleMenuClose}>404</MenuItem>             
                         <MenuItem onClick={handleMenuClose}>Coming Soon</MenuItem>      
                    </Menu>
                    <Link to={'/contact'}><Button>Contact Us</Button></Link>
                </Box>

                <Link to={'/admission'}><Button variant="contained" className="get-started">Get Started</Button></Link>

                {/* Mobile Menu Icon */}
                <IconButton className="menu-icon" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
              <Box justifySelf={'flex-start'}>
                <IconButton onClick={handleDrawerToggle} className="close-menu-icon"  sx={{color:'red'}}>
                    <CloseIcon  />
                </IconButton></Box>
                
                <List className="mobile-menu">
                <Box justifySelf={'center'}>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/'}><ListItemText primary="Home" /></Link></ListItem>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/about'}><ListItemText primary="About" /></Link></ListItem>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/classes'}><ListItemText primary="Classes" /></Link></ListItem>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/testimonials'}><ListItemText primary="Testimonials" /></Link></ListItem>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/faqs'}><ListItemText primary="FAQs" /></Link></ListItem>
                    <ListItem button onClick={handleDrawerToggle}><Link className="navLink" to={'/contact'}><ListItemText primary="Contact Us" /></Link></ListItem>
                    </Box>
                </List>
              
            </Drawer>
        </AppBar>
    );
}

export default Navbar;
