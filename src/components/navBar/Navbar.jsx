import React from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import { useState } from "react";
import kidslogo from "../../assets/kidzena-red.png"
import "./Navbar.css"
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
            <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}>Classes</Button>
           <Link to={'/about'}><Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}} >About</Button></Link> 
         <Link to={'/contact'}> <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}>Contact Us</Button></Link>  
            <Button sx={{color:'black',fontWeight:600,
              textTransform:'none',fontSize:'18px'}}  onClick={handleMenuOpen}>Pages ▼</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Classes Detail</MenuItem>
              <MenuItem onClick={handleMenuClose}>Programs</MenuItem>
              <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
              <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
              <MenuItem onClick={handleMenuClose}>Team</MenuItem>
              <MenuItem onClick={handleMenuClose}>Moments</MenuItem>
              <MenuItem onClick={handleMenuClose}>404</MenuItem>
              <MenuItem onClick={handleMenuClose}>Coming Soon</MenuItem>
            </Menu>
          </Box>
       </Box>
         
          <Button variant="contained" sx={{color:'#fff',fontWeight:600,
            textTransform:'none',fontSize:'18px',background:'#ee186d'}} className="get-started">
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;

