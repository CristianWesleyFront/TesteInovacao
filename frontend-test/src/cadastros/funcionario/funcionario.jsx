import React, {Component} from 'react'
import Content from '../../layout/content/content'
import ContentHeader from '../../layout/content/contentHeader'

import Form from './funcionarioForm/funcionarioForm'
import List from './funcionarioList/funcionarioList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { refresh } from './funcionario.action'

class Formulario extends Component {
    componentWillMount(){
        this.props.refresh()
    }
   

    render(){
        return(
            <div>
                <ContentHeader title='Cadastro de Funcionário'></ContentHeader>
                <Content>
                    <Form></Form>
                    <hr/>
                   <List/>
                </Content>
            </div> 
        )
    }
} 

const mapDispatchToProps = dispatch => 
    bindActionCreators({  refresh }, dispatch)
export default connect(null, mapDispatchToProps)(Formulario)