"use client";
import React, { useState } from "react";
import "./styles/HeaderStyle.css";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header = () => {
  const [mobileopen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileopen);
  };

  //menu drawer
  const drawer = (
    <Box className ="fullheader" onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography
              color={"gold"}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
        >
              <FastfoodIcon/>&nbsp; Engineers Restaurant

        </Typography>
            <Divider/>
            
              <ul className="mobilenavigation">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#4b4d4b" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"gold"}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />&nbsp;Engineer's  Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigationmenu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer
                variant="temporary"
                open={mobileopen}
                onClose={handleDrawerToggle}
                sx={{display:{xs:'block', sm:'none'},
                "& .MuiDrawer-paper":{
                    boxSizing:'border-box',
                    width:'250px',
                }
            }}
            >
                {drawer}
            </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;
