import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { GoogleLogin } from 'react-google-login';
import { useGoogleAuth } from './googleAuth';
import TextField from '@mui/material/TextField';
import DocUrl from './docUrl';


export default function BasicCard() {
    const { signIn, signOut, googleUser, isSignedIn } = useGoogleAuth();
    const [opId, setOpId] = React.useState(null);
    const [finalOpId, setFinalOpId] = React.useState(null);

    const callGetUrl = () => {
        setFinalOpId(opId);
    }

  return (
    <Card sx={{ maxWidth: 645 }}>
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
      <TextField id="outlined-basic" label="Id Operación" variant="outlined" onChange={e => setOpId(e.target.value)} />
      <CardActions>
        <Button onClick={callGetUrl} variant="contained" size="small">Generar Documentos</Button>
        <DocUrl opId={finalOpId}></DocUrl>
      </CardActions>
    </Card>
  );
}