import React, { Component } from 'react'
import axios from 'axios'

import ListaMovimentacao from './listaMovimentacao'

const URL = 'http://localhost:9000/api/movimentacao'

export default class Movimentacao extends Component {
    constructor(props){
        super(props)
        this.state = { list: [] }
    }
    componentWillMount(){
        const search = '';
        axios.get(`${URL}?sort=-createdAt${search}`)
             .then(resp => this.setState({...this.state, list: resp.data}))
    }


    render(){
        return (
            <div>
              <ListaMovimentacao 
                list = {this.state.list} 
              />
               
            </div>
        )
    }
}