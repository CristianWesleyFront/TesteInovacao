import React, {Component} from 'react'
import Content from '../../common/content/content'
import ContentHeader from '../../common/content/contentHeader'
import axios from 'axios'
import Form from './movimentacaoForm'
''

const URL = 'http://localhost:9000/api/movimentacao'
const URLDe = 'http://localhost:9000/api/departamento'
const URLFun = 'http://localhost:9000/api/funcionario'

export default class Formulario extends Component {
    constructor(prosp){
        super(prosp)
        this.state = {description: '', funcionario: '',valor:'',departamento:'',listFun: [], listDep: [] }
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeFuncionario = this.handleChangeFuncionario.bind(this)
        this.handleChangeValor = this.handleChangeValor.bind(this)
        this.handleChangeDepartamento = this.handleChangeDepartamento.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
       
        this.handleClear = this.handleClear.bind(this)
    }
    componentWillMount(){
        this.refresh()
    }
    //HANDLECHANGES----------------------------
    handleChangeDescription(e){
        console.log(e.target.value)
        this.setState({...this.state, description: e.target.value})
    }
    handleChangeFuncionario(newValue){
        let j = newValue.value
        console.log(newValue)
        this.setState({...this.state, funcionario: j})
    }
    handleChangeValor(e){
        console.log(e.target.value)
        this.setState({...this.state, valor: e.target.value})
    }
    handleChangeDepartamento(newValue){
        let j = newValue.value
        
        console.log(newValue)
    
        this.setState({...this.state, departamento: j})
    }
    //--------------------------------

    handleAdd(){
        const funcionario = this.state.funcionario
        const departamento =  this.state.departamento
        const description = this.state.description
        const valor = this.state.valor
        console.log({funcionario:this.state.funcionario,
            departamento :this.state.departamento,
            description :this.state.description,
            valor:this.state.valor})
        axios.post(URL, { description,funcionario, departamento,valor })
             .then(resp => this.refresh())
             .then(window.location.href = 'http://localhost:3000/')
             
     }

    handleClear(){
        this.refresh()
    }
    refresh() {
        axios.get(URLFun)
             .then(resp => this.setState({...this.state, listFun: resp.data}))
             .then(axios.get(URLDe)
                .then(resp => this.setState({...this.state,listDep: resp.data})))
            
    }
   

    render(){
        return(
            <div>
                <ContentHeader title='Cadastro de movimentacao'></ContentHeader>
                <Content>
                    <Form
                        description = {this.state.description}
                        funcionario = {this.state.funcionario}
                        valor = {this.state.valor}
                        departamento = {this.state.departamento}
                        listFun = {this.state.listFun}
                        listDep = {this.state.listDep}
                        handleChangeDescription = {this.handleChangeDescription}
                        handleChangeFuncionario = {this.handleChangeFuncionario}
                        handleChangeValor = {this.handleChangeValor}
                        handleChangeDepartamento = {this.handleChangeDepartamento}
                        handleAdd={this.handleAdd}
                        handleClear= {this.handleClear}
                    ></Form>
                </Content>
            </div> 
        )
    }
} 