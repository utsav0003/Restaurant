import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";


import Dosa from '../images/dosa.jpg'
import Burgir from '../images/burgir.jpg'
import Bhature from '../images/chole bhature.jpg'
import Fries from '../images/fries.jpg'
import Golgappe from '../images/golgappe.jpg'
import Idli from '../images/idli.jpg'
import Noodle from '../images/noodle.jpg'
import Paneer from '../images/paneer.jpg'
import Pasta from '../images/pasta.jpg'
import Samosa from '../images/samosa.jpg'
import Thali from '../images/vegThali.jpg'


const page = () => {
  const menuList = [
    {
      name: "Dosa",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      price: 200,
    },
    {
      name: "Burgir",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 50,
    },
    {
      name: "Chole Bhature",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://media.istockphoto.com/id/1292633282/photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-or-channa-masala-is-traditional.jpg?s=612x612&w=0&k=20&c=_RchJn069ZFAnwm6alF2VWA3VDbJnm-JIid3antsIZc=',
      price: 80,
    },
    {
      name: "French Fries",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      price: 40,
    },
    {
      name: "Golgappe",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://media.istockphoto.com/id/1257507130/photo/three-glasses-of-various-milkshakes-strawberry-chocolate-and-vanilla-milkshake-on-wooden.jpg?s=612x612&w=0&k=20&c=ujhttpmHMI1KqCkr9QYeLWs6CZ4I4pcx_x7Z814wddc=',
      price: 30,
    },
    {
      name: "Idli",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://t3.ftcdn.net/jpg/04/02/12/80/240_F_402128075_06J9Y69ScRrYKFpQr1PAH0L7YziB83ry.jpg',
      price: 60,
    },
    {
      name: "Noodle",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 350,
    },
    {
      name: "Paneer",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://media.istockphoto.com/id/1085153052/photo/paneer-do-pyaza-is-a-popular-punjabi-vegetarian-recipe-using-cubes-of-cottage-cheese-with.jpg?s=612x612&w=0&k=20&c=S3GevdIQd9r95KqfttRODJECtvhmK1Jhput_Me_-FIo=',
      price: 200,
    },
    {
      name: "Pasta",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 250,
    },
    {
      name: "Samosa",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 80,
    },
    {
      name: "Veg Thali",
      description:
        "Excepteur sint occaecat officia deserunt mollit anim id est laborum.",
      image: 'https://t3.ftcdn.net/jpg/02/75/39/20/240_F_275392052_4q7ytTmE7ZTu11hLiNCMFmZAG2PXzgCt.jpg',
      price: 400,
    },
  ];

  return (
    <>
      <Box sx={{ background:'#cfc2c2', display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuList.map((menu, i) => (
          <Card key={i} sx={{ maxWidth: "395px", display: "flex", m: 2, background:'#c7a5a5' }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "240px" }}
                image={menu.image}
                title={menu.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  ₹ {menu.price}
                </Typography>
                <Typography gutterBottom variant="h5" component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Order Now</Button>
                <Button size="small">Add To Cart</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}

        
      </Box>
    </>
  );
};

export default page;
