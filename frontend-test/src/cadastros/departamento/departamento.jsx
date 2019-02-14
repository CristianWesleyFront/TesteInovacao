import React, {Component} from 'react'
import Content from '../../layout/content/content'
import ContentHeader from '../../layout/content/contentHeader'


import List from './departamentoList'
import Form from './departamentoForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { refresh } from './departamento.action'

class Departamento extends Component {

    componentWillMount(){
        this.props.refresh()
    }
    render(){
        return (
            <div>
                <ContentHeader title='Cadastro de Departamento'></ContentHeader>
                <Content>
                    <Form></Form>
                    <hr/>
                    <List />
                </Content>
            </div> 
        )
    }
}
   
const mapDispatchToProps = dispatch => 
    bindActionCreators({  refresh }, dispatch)
export default connect(null, mapDispatchToProps)(Departamento)