import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import { useState } from "react";
import kidslogo from "../../assets/kidzena-red.png"
import "./Navbar.css"
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

   
    return (
      <AppBar position="fixed" className="navbar">
        <Toolbar className="toolbar">
            <Box>
            <img src={kidslogo} alt="Kidzena" className="logo" />
            </Box>
       <Box>
       <Box className="nav-links">
         <Link to={'/'}><Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}} >Home</Button></Link> 

           <Link to={'/about'}><Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}} >About</Button></Link> 

              <Link to={'/classes'}> <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}>Classes</Button> </Link>

            <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}  onClick={handleMenuOpen}>Pages ▼</Button>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>

              <MenuItem >
              <ScrollLink onClick={handleMenuClose} to="activities"   smooth={true} duration={800} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
              Activities
                </ScrollLink>
                </MenuItem> 
            <Link to={'/testimonials'} style={{textDecoration:'none',color:'black'}}> <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem></Link> 
            <Link to={'/faqs'} style={{textDecoration:'none',color:'black'}}> <MenuItem onClick={handleMenuClose}>FAQs</MenuItem></Link> 
      
              <MenuItem >
                <ScrollLink onClick={handleMenuClose} to="moments-section"  smooth={true} duration={800} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
                  Moments
                </ScrollLink>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>Team</MenuItem>

              <MenuItem onClick={handleMenuClose}>404</MenuItem>
              
              <MenuItem onClick={handleMenuClose}>Coming Soon</MenuItem>             
            </Menu>
             <Link to={'/contact'}> <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}>Contact Us</Button></Link> 
          </Box>
       </Box>
         
        <Link to={'/admission'} style={{textDecoration:'none',color:'black'}}> <Button variant="contained" sx={{color:'#fff',fontWeight:600,
            textTransform:'none',fontSize:'18px',background:'#ee186d'}} className="get-started">
            Get Started
          </Button></Link> 
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;

