import axios from "axios";
import React from "react";
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const baseURL = "https://script.google.com/macros/s/AKfycbwC-91PwmAD0gcy_WSfNmPSTV8Q06kDKzmAjMbSHXypGkKxRUKMgXP0hT997k0GTyg/exec?op_id=";

export default function DocUrl(props) {
  const [docUrl, setDocUrl] = React.useState(null);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    axios.get(baseURL + props.opId).then((response) => {
        setDocUrl(response.data.documentURL);
        setButtonDisabled(false);
    });
  }, []);

  if (!docUrl) return null;

  if (docUrl){return (
    
    <Button variant="contained" href={docUrl} disabled={buttonDisabled}>
    Abrir Documento
    </Button>
  )}
  else {
      return (
        <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Generando Documento
      </LoadingButton>
      )
  } 
}