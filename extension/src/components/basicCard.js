import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image="logo-horizontal.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Acción Rápida
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Template de Extensión de Chrome para apoyar con alguna acción rápida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acción 1</Button>
        <Button size="small">Acción 2</Button>
      </CardActions>
    </Card>
  );
}