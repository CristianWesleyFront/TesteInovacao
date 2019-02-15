import React, { Component } from 'react'
import ListaMovimentacao from './TableList_Movimentacao/listaMovimentacao'
import Content from '../layout/content/content'
import ContentHeader from '../layout/content/contentHeader'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchDescription } from './Movimentacoes.Actions'

class Movimentacao extends Component {
      
    componentWillMount(){
        this.props.searchDescription()
    }
    render(){
        return (
            <div>
              <ContentHeader title='Lista de Movimentações'/>
                <Content>
                    <hr></hr>
                    <ListaMovimentacao />
                </Content> 
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => 
    bindActionCreators({  searchDescription }, dispatch)
export default connect(null, mapDispatchToProps)(Movimentacao)