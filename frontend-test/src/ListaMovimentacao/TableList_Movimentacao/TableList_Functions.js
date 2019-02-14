import React,{Fragment} from 'react'
import IconButton from '../../layout/template/iconButton'
import Ctd from '../../layout/template/table/CTd'
import CTr from '../../layout/template/table/CTr'

export default function renderRows(list,FunctionOnclick,NomeLista){
    const listAux = list || []
    function compara(NomeLista,listAux){
        if(NomeLista == 'departamento'){
            return (
                <Ctd className='tabelaLinha'>{listAux.name}</Ctd>
            )
        } 
        else if (NomeLista == 'movimentacao'){
            return (
                <Fragment>
                    <Ctd className='tabelaLinha'>{listAux.description}</Ctd>
                    <Ctd>{listAux.funcionario}</Ctd>
                    <Ctd>{listAux.valor}</Ctd>
                </Fragment>
            )
        }
        else{
            return (
                <Fragment>
                    <Ctd className='tabelaLinha'>{listAux.name}</Ctd>
                    <Ctd>{listAux.departamento}</Ctd>
      
                </Fragment>
            )
           
        }
        
    }
    return listAux.map(listAux => (
        <CTr key={listAux._id}>
            {compara(NomeLista,listAux)}
            <Ctd>
                <IconButton style='danger' icon='trash-o' onClick={()=>FunctionOnclick(listAux)}></IconButton>
            </Ctd>
        </CTr>
    ))
}

