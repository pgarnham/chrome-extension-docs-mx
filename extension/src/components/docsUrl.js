import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const baseURL = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;


export default function DocUrl(props) {
  const [docUrl, setDocUrl] = useState(null);
  const [linkState, setLinkState] = useState(null);
  const [firstTime, setFirstTime] = useState(true);

  const showButton = (documentURL) => {
    setDocUrl(documentURL);
    setLinkState('ready');
}

  useEffect( () => {
      if (props.opId != null && firstTime){
        setLinkState('generating');
        setFirstTime(false);

        axios.post(baseURL, {
          pmAddress: props.pmAddress,
          opId: props.opId,
          token: apiToken,
          contractDate: props.contractDate.toISOString().slice(0, 10)
        }).then(response => {
          console.log("La response es: ", response);
          showButton(response.data.documentUrl);
        })
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