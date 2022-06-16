import React, { useState } from 'react';
import SelectLegalRepClient from './selectLegalRepClient';
import SelectLegalRepPayer from './selectLegalRepPayer';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import SelectLegalRepDocuments from './selectLegalRepDocuments';

export default function LegalRepsConfiguration(props) {

    let itemList=[];
    let clientLegalRepsList = [];
    let payerLegalRepsList = [];
    props.legalReps.forEach((legalRep, index)=>{
        if (props.orderType == 'EARLY_PAYMENT'){
            if (legalRep.tipo == 'emisor'){
                clientLegalRepsList.push(
                    <SelectLegalRepClient 
                                            value={legalRep.legalRepDocuments}
                                            name={legalRep.name}
                                            handleChange={props.handleChange}
                                            index={index}
                                            >
                            </SelectLegalRepClient>
                )
            }
            else {
                payerLegalRepsList.push( <SelectLegalRepPayer 
                    value={legalRep.legalRepDocuments}
                    name={legalRep.name}
                    handleChange={props.handleChange}
                    index={index}
                    >
                    </SelectLegalRepPayer>)
            }
        }
        else {
            itemList.push(
                <SelectLegalRepDocuments 
                    value={legalRep.legalRepDocuments}
                    name={legalRep.name}
                    handleChange={props.handleChange}
                    index={index}
                    >
                    </SelectLegalRepDocuments>
            )
        }
        })

   if (clientLegalRepsList.length > 0 || payerLegalRepsList.length > 0){
        return(<Container>
            <Divider >Representantes Legales del Cliente</Divider>
            <br></br>
                {clientLegalRepsList}
                <br></br><br></br>
            <Divider >Representantes Legales del Pagador</Divider>
            <br></br>
                {payerLegalRepsList}
            </Container>)
    }
    else {
        return (<Container>
            {itemList}
        </Container>)
    }

}