import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ServiceCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.tab.img}
          alt="green iguana"
        />
        <CardContent sx={{minHeight:160}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.tab.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.tab.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
