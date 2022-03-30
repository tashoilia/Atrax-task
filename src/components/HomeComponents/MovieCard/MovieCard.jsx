import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie}) => {
  let navigate = useNavigate();
  const {id,image,title,description} = movie

  return (
   <Card 
    sx={{ maxWidth: 345 }} 
    key={id}
    onClick={() => {
      navigate(`movie/${id}`);
    }}
   >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${title} ${description}`}
          </Typography>
        </CardContent>
      </CardActionArea>
   </Card>
  )
}

export default MovieCard