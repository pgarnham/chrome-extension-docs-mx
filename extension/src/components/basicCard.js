import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DocUrl from './docsUrl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export default function BasicCard() {
    const [opId, setOpId] = useState(null);
    const [pmAddress, setPmAddress] = useState(null);
    const [finalOpId, setFinalOpId] = useState(null);
    const [contractDate, setContractDate] = useState(new Date())

    const callGetUrl = () => {
        setFinalOpId(opId);
    }


  return (
    <Card sx={{ maxWidth: 745, p: 2 }}>
      <CardMedia
        component="img"
        image="logo-horizontal.png"
        alt="green iguana"
        style={{'maxHeight': '40px', 'maxWidth': '300px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Documentos Por Operación MX
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingresa el id de la Operación y la dirección de la persona moral para generar los documentos
        </Typography>
      </CardContent>
      <Stack spacing={2}>
      <TextField id="outlined-basic" label="Id Operación" variant="outlined" onChange={e => setOpId(e.target.value)} />
      <TextField id="outlined" label="Dirección PM" variant="outlined" onChange={e => setPmAddress(e.target.value)} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
          label="Fecha Primera Operacion"
          value={contractDate}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setContractDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      </Stack>
      <CardActions>
        <Button onClick={callGetUrl} variant="contained" size="small">Generar Documentos</Button>
        <DocUrl opId={finalOpId} pmAddress={pmAddress} contractDate={contractDate}></DocUrl>
      </CardActions>
    </Card>
  );
}