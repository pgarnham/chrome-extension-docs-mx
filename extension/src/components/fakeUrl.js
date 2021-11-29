import axios from "axios";
import React from "react";
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const baseURL = "https://script.google.com/macros/s/AKfycbwC-91PwmAD0gcy_WSfNmPSTV8Q06kDKzmAjMbSHXypGkKxRUKMgXP0hT997k0GTyg/exec?op_id=";

export default function DocUrl(props) {
  const [docUrl, setDocUrl] = React.useState(null);
  const [linkState, setLinkState] = React.useState(null);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [firstTime, setFirstTime] = React.useState(true);

  const showButton = () => {
    setDocUrl('https://docs.google.com/document/d/1g5638pKx0EjdA-trhVRPOZo9a-FMTYr_J2YLN3mON_s/edit');
    setLinkState('ready');
}

  React.useEffect(() => {
      if (props.opId != null && firstTime){
        setLinkState('generating');
        setFirstTime(false);
        setTimeout(showButton, 4000);
      }
  });

  const openUrlInNewPage = () => {
    window.open(docUrl, "_blank");
}
 

  

  if (linkState == "ready"){return (
    
    <Button variant="contained" onClick={openUrlInNewPage} >
    Abrir Documento
    </Button>
  )}
  else if (linkState == "generating") {
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
  else {
      return (<div></div>)
  }
}