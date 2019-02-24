import React, {Component} from 'react'
import Content from '../../layout/content/content'
import ContentHeader from '../../layout/content/contentHeader'
//import Form from './movimentacaoForm/movimentacaoForm'

 

export default class Formulario extends Component {
   
    // componentWillMount(){
    //     this.refresh()
    // }
    
    
    render(){
        return(
            <div>
                <ContentHeader title='Cadastro de movimentacao'></ContentHeader>
                <Content>
                    {/* <Form></Form> */}
                </Content>
            </div> 
        )
    }
} 