import React, {Component} from 'react'
import Content from '../../common/content/content'
import ContentHeader from '../../common/content/contentHeader'
import axios from 'axios'
import Form from './funcionarioForm'
import List from './funcionarioList'


const URL = 'http://localhost:9000/api/funcionario'
const URLDe = 'http://localhost:9000/api/departamento'

export default class Formulario extends Component {
    constructor(prosp){
        super(prosp)
        this.state = {name: '', departamento: '', listDepartamentos: [],listFuncionarios: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeDe = this.handleChangeDe.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    componentWillMount(){
        this.refresh()
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({...this.state, name: e.target.value})
    }
    handleChangeDe(newValue){
        let j = newValue.length
        let desp = []
        for(let i=0 ; i < j; i++){
            desp[i] = newValue[i].value
        }
        console.log(newValue)
        console.log(desp)
        this.setState({...this.state, departamento: desp })
    }
    handleAdd(){
        const name = this.state.name
        const departamento =  this.state.departamento
        axios.post(URL, { name, departamento })
             .then(resp => this.refresh())
             
     }
     handleRemove(todo) {    
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.name))
    }
    handleClear(){
        this.refresh()
    }
    refresh(name = '') {
        axios.get(`${URL}?sort=-createdAt`)
             .then(resp => this.setState({...this.state,name, listFuncionarios: resp.data})
                 )
             .then(axios.get(URLDe)
                .then(resp => this.setState({...this.state,listDepartamentos: resp.data})))
    }
   

    render(){
        return(
            <div>
                <ContentHeader title='Cadastro de Funcionário'></ContentHeader>
                <Content>
                    <Form
                     name={this.state.name}
                     list= {this.state.listDepartamentos}
                     departamento= {this.state.departamento} 
                     handleChange ={this.handleChange}
                     handleChangeDe ={this.handleChangeDe}
                     handleAdd={this.handleAdd}
                     handleClear= {this.handleClear}
                    ></Form>
                    <hr/>
                   <List 
                     listFuncionarios={this.state.listFuncionarios}
                     handleRemove = {this.handleRemove}
                   />
                </Content>
            </div> 
        )
    }
} 