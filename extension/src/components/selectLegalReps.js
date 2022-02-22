import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Solicitud"
          labelPlacement="end"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Confirmación"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Pagaré"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}