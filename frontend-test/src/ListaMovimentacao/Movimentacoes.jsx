import React, { Component } from 'react'
import axios from 'axios'
import ListaMovimentacao from './listaMovimentacao'
import Content from '../common/content/content'
import ContentHeader from '../common/content/contentHeader'
const URL = 'http://localhost:9000/api/movimentacao'


export default class Movimentacao extends Component {
    constructor(props){
        super(props)
        this.state = { description: '',funcionario:'', list: [] }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearchFun = this.handleSearchFun.bind(this)
        this.handleChangeFun = this.handleChangeFun.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    componentWillMount(){
        this.refresh()
    }
    handleRemove(list) {    
        axios.delete(`${URL}/${list._id}`)
            .then(resp => this.refresh())
    }
    handleClear(){
        this.refresh()
    }
    //PESQUISAR POR DESCRICAO
        refresh(description = ''){
            const search = description ? `&description__regex=/${description}/` : '';
            axios.get(`${URL}?sort=-createdAt${search}`)
                .then(resp => this.setState({...this.state,description:'', list: resp.data}))
        }
        handleSearch(){
            this.refresh(this.state.description)
        }

        handleChange(e){
            this.setState({...this.state, description: e.target.value})
        }
    //---------------------------
    //PESQUISAR POR FUNCIONARIO
        refreshFun(funcionario= ''){
            const search = funcionario ? `&funcionario__regex=/${funcionario}/` : '';
            axios.get(`${URL}?sort=-createdAt${search}`)
                .then(resp => this.setState({...this.state,funcionario:'', list: resp.data}))
        }
        handleSearchFun(){
            this.refreshFun(this.state.funcionario)
        }

        handleChangeFun(e){
            this.setState({...this.state, funcionario: e.target.value})
        }
    //--------------------------
    
    render(){
        return (
            <div>
              <ContentHeader title='Lista de Movimentações'/>
                <Content>
                    <ListaMovimentacao 
                        list = {this.state.list} 
                        handleRemove = {this.handleRemove}
                        handleSearch = {this.handleSearch}
                        handleChange ={this.handleChange}
                        handleSearchFun = {this.handleSearchFun}
                        handleChangeFun ={this.handleChangeFun}
                        handleClear= {this.handleClear} 
                    />
                </Content>
              
              
            </div>
        )
    }
}