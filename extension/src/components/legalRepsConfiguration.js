import React, { useState } from 'react';
import SelectLegalReps from './selectLegalRepDocuments';
import Container from '@mui/material/Container';

export default function LegalRepsConfiguration(props) {

    let itemList=[];
    props.legalReps.forEach((legalRep, index)=>{
        itemList.push( <SelectLegalReps 
                                        value={legalRep.legalRepDocuments}
                                        name={legalRep.name}
                                        handleChange={props.handleChange}
                                        index={index}
                                        >
                        </SelectLegalReps>)
        })

    return (<Container>
            {itemList}
        </Container>)
}