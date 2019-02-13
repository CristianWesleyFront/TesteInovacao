import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem  path='/' label='Movimentações' icon='usd'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='/funcionario' label='Funcionario'
                icon='' />   
            <MenuItem path='/departamento' label='Departamento'
                icon='' />   
            <MenuItem path='/movimentacao' label='Movimentação'
                icon='' />  
        </MenuTree>
    </ul>
)