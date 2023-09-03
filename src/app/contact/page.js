import React from 'react'
import Front from '../Components/Front'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';



const page = () => {
  return (
    <Box sx={{background: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)'}}>
        <Box sx= {{
          ml:5,
          '& h3':{fontWeight:'bold', mb:2,
        "@media (max-width:600px)":{
          
          ml:2,
          fontSize:'1.5rem'
        }
        
        }}}>
          <Typography variant='h3'>Contact with Us </Typography>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

          </p>
        </Box>

        <Box sx={{
          m:5,
          width:'600px',
          ml:'10',
          boxShadow:'0px 0px 2px 2px #000',
          "@media (max-width:600px)":{
            width:'300px',
            ml:5
          }
          }}>
          <TableContainer component={Paper}>
            <Table aria-label='Contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white',fontSize:'2.5rem',
                    "@media (max-width:600px)":{
                      fontSize:'1.5rem'
                    }
                  }}
                    align='center'
                  >Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1 }}/> 011-2553-2553 (Toll Free)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{color:'blue', pt:1 }}/> engineersbar000@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <PhoneIcon sx={{color:'green', pt:1 }}/>+91 99999-99999
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
       
    </Box>
  )
}

export default page