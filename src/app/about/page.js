import { Box, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
        <Box
          sx={{
            my:1,
            textAlign:'center',
            p:2,
            background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
            height:'90vh',
            "& h3":{
              my:2,
              fontSize:"3rem"
            },
            "& p":{
              textAlign:'justify',
            },
            "@media (max-width:600px)":{
              background: '#a8abad',
              mt:0,
              "& h3":{
                fontSize:'1.5rem'
              }
            }
          }}
        >
          <Typography variant='h3'> 
            Welcome to my Restaurant
          </Typography>
          
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. <br/> <br/>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

          </p>
        </Box>
    </>
  )
}

export default page