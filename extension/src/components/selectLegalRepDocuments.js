import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


export default function SelectLegalRepDocuments(props) {
  return (
    <FormControl component="fieldset"
                 value={props.value}>
      <FormGroup aria-label="position" row sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 0.2,
          },
          '& hr': {
            mx: 0.7,
          },
        }}
        style={{'marginBottom': '5px'}}
        onChange={(e, value) => {props.handleChange(e, value, props.index)}} 
        >
        <Typography style={{'marginLeft': '6px', 'marginRight': '5px'}}>
          {props.name}
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormControlLabel
          control={<Checkbox checked={props.value.solicitud} onChange={(e, value) => {props.handleChange(e, value, props.index)}} name="solicitud"/>}
          label="Solicitud"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Checkbox checked={props.value.confirmacion} onChange={(e, value) => {props.handleChange(e, value, props.index)}} name="confirmacion" />}
          label="Confirmación"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Checkbox checked={props.value.pagare} onChange={(e, value) => {props.handleChange(e, value, props.index)}} name="pagare" />}
          label="Pagaré"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Checkbox checked={props.value.aval} onChange={(e, value) => {props.handleChange(e, value, props.index)}} name="aval" />}
          label="Aval"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}