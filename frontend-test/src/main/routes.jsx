import React from 'react'


import { Switch, Route, Redirect} from 'react-router'

import funcionario from '../cadastros/funcionario/funcionario'
import departamento from '../cadastros/departamento/departamento'
import movimentacao from '../cadastros/movimentacao/movimentacao'
//import ListaMovimentacao from '../ListaMovimentacao/listaMovimentacao'
import Movimentacao from '../ListaMovimentacao/Movimentacoes'
//import AuthOrApp from './authOrApp'


export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Movimentacao} />
            <Route path='/funcionario' component={funcionario} />
            <Route path='/departamento' component={departamento} />
            <Route path='/movimentacao' component={movimentacao} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)