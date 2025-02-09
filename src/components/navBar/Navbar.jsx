import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";
import kidslogo from "../../assets/kidzena-red.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => setAnchorEl(null);


  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
    handleMenuOpen(false)
  };

  const handleScrollToSection = (sectionId) => {
    handleMenuClose(); 
    setMobileOpen(false); 

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 800,
        });
      }, 500); 
    } else {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 800,
      });
    }
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <Box>
          <img src={kidslogo} alt="Kidzena" className="logo" />
        </Box>

        <Box className="nav-links">
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
          <Link to={"/about"}>
            <Button>About</Button>
          </Link>
          <Link to={"/classes"}>
            <Button>Classes</Button>
          </Link>
          <Link to={"/contact"}>
            <Button>Contact</Button>
          </Link>
          <Button onClick={handleMenuOpen}>
            More{" "}
            <KeyboardArrowDownIcon style={{ fontWeight: "bold", fontSize: "30px" }} />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleScrollToSection("activities")}>Activities</MenuItem>
            <Link className="navLink" to={"/testimonials"}>
              <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
            </Link>
            <MenuItem onClick={() => handleScrollToSection("moments-section")}>Moments</MenuItem>
            <Link className="navLink" to={"/faqs"}>
              <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
            </Link>
            <MenuItem onClick={handleMenuClose}>404</MenuItem>
            <MenuItem onClick={handleMenuClose}>Coming Soon</MenuItem>
          </Menu>
        </Box>

        <Link to={"/admission"}>
          <Button variant="contained" className="get-started">
            Get Started
          </Button>
        </Link>

        {/* Mobile Menu Icon */}
        <IconButton className="menu-icon" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box justifySelf={"flex-start"}>
          <IconButton onClick={handleDrawerToggle} className="close-menu-icon" sx={{ color: "red" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List className="mobile-menu">
          <Box justifySelf={"center"}>
            <ListItem button onClick={handleDrawerToggle}>
              <Link className="navLink" to={"/"}>
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <Link className="navLink" to={"/about"}>
                <ListItemText primary="About" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <Link className="navLink" to={"/classes"}>
                <ListItemText primary="Classes" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <Link className="navLink" to={"/contact"}>
                <ListItemText primary="Contact " />
              </Link>
            </ListItem>

            {/* More Menu inside Drawer */}
            <Box>
              <Button onClick={handleMenuOpen} sx={{ marginLeft: "10px", color: "black" }}>
                More <KeyboardArrowDownIcon style={{ fontWeight: "bold", fontSize: "30px" }} />
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => handleScrollToSection("activities")}>Activities</MenuItem>
                <Link className="navLink" to={"/testimonials"}>
                  <MenuItem onClick={handleDrawerToggle}>Testimonials</MenuItem>
                </Link>
                <MenuItem onClick={() => handleScrollToSection("moments-section")}>Moments</MenuItem>
                <Link className="navLink" to={"/faqs"}>
                  <MenuItem onClick={handleDrawerToggle}>FAQs</MenuItem>
                </Link>
                <MenuItem onClick={handleDrawerToggle}>404</MenuItem>
                <MenuItem onClick={handleDrawerToggle}>Coming Soon</MenuItem>
              </Menu>
            </Box>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
