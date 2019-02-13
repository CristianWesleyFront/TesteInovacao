import React from 'react'
import CTr from '../../layout/template/table/CTr'
import CTh from '../../layout/template/table/CTh'

export default props => (
    <CTr>
        <CTh value='Descrição'/>
        <CTh value='Funcionário'/>
        <CTh value='Valor R$'/>
        <CTh value='Ação'/>
    </CTr>
)