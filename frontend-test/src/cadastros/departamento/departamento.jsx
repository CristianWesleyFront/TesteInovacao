import React, {Component} from 'react'
import Content from '../../layout/content/content'
import ContentHeader from '../../layout/content/contentHeader'
import axios from 'axios'

import Form from './departamentoForm'
import List from './departamentoList'


const URL = 'http://localhost:9000/api/departamento'
export default class Departamento extends Component {
    constructor(prosp){
        super(prosp)
        this.state = { departamento: '', listDepartamentos: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    componentWillMount(){
        this.refresh()
    }
   


    render(){
        return (
            <div>
                <ContentHeader title='Cadastro de Departamento'></ContentHeader>
                <Content>
                    <Form
                     departamento={this.state.departamento}
                     list= {this.state.listDepartamentos}
                     handleChange ={this.handleChange}
                     handleChangeDe ={this.handleChangeDe}
                     handleAdd={this.handleAdd}
                     handleClear= {this.handleClear}
                    ></Form>
                    <hr/>
                    <List 
                     listDepartamentos={this.state.listDepartamentos}
                     handleRemove = {this.handleRemove}
                   />
                </Content>
            </div> 
        )
    }
}
   
