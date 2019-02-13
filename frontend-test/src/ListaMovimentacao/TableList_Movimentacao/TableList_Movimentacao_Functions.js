import React from 'react'
import IconButton from '../../layout/template/iconButton'
import Ctd from '../../layout/template/table/CTd'
import CTr from '../../layout/template/table/CTr'

export default function renderRows(list,FunctionOnclick){
    const listAux = list || []
    return listAux.map(listAux => (
        <CTr key={listAux._id}>
            <Ctd className='tabelaLinha'>{listAux.description}</Ctd>
            <Ctd>{listAux.funcionario}</Ctd>
            <Ctd>{listAux.valor}</Ctd>
            <Ctd>
                <IconButton style='danger' icon='trash-o' onClick={()=>FunctionOnclick(listAux)}></IconButton>
            </Ctd>
        </CTr>
    ))
}

