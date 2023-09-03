"use client";
import './styles/FooterStyle.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Box className ="fullfooter" >
          <Box
            sx={{
              
              my:2,
              "& svg":{
                fontSize:'4rem',
                cursor:'pointer',
                mr:5,

              },
              '& svg:hover':{
                color:'gold',
                transform:'translateX(5px)',
                transition:'all 400ms'
              },
              
            }}
          >
            <InstagramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
            <EmailIcon/>
          </Box>
            <Typography
              variant='h5'
              sx={{
                "@media (max-width:600px)":{
                  fontSize: "1rem",
                  

                },
                
              }}
            >
                All Rights Reserved &copy; Utsav Jha Pvt.Ltd.
            </Typography>
        </Box>
    </>
  )
}

export default Footer