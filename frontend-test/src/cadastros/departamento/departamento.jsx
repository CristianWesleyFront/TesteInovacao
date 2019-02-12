import React, {Component} from 'react'
import Content from '../../common/content/content'
import ContentHeader from '../../common/content/contentHeader'
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
    handleChange(e){
        console.log(e.target.value)
        this.setState({...this.state, departamento: e.target.value})
    }
    
    handleAdd(){
        const name =  this.state.departamento
        axios.post(URL, { name })
             .then(resp => this.refresh())
     }
     handleRemove(todo) {    
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.departamento))
    }
    handleClear(){
        this.refresh()
    }
    refresh(departamento = '') {
        axios.get(`${URL}?sort=-createdAt`)
             .then(resp => this.setState({...this.state,departamento, listDepartamentos: resp.data}))
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
   
