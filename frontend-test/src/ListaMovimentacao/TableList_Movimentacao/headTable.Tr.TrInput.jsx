import React,{Component} from 'react'
import CTr from '../../layout/template/table/CTr'
import CTh from '../../layout/template/table/CTh'
import CInput from '../../layout/template/Formulario/CInput'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchDescription,searchFuncionario,changeDescription,changeFuncionario } from '../Movimentacoes.Actions'

class Search extends Component{
    
    render(){
        const {searchDescription,searchFuncionario,description,funcionario} = this.props
        const keyHandlerFun = () => searchFuncionario() 
        const keyHandler = () => searchDescription() 
        
        return(
            <CTr>
                <CTh>
                    <CInput 
                        placeholder='Pesquisar por descrição'
                        
                        value={description}
                        onChange={this.props.changeDescription}
                        onKeyUp = {keyHandler}
                    />
                </CTh>
                <CTh>
                    <CInput 
                        placeholder='Pesquisar por Funcionário'
                       
                        value={funcionario}
                        onChange={this.props.changeFuncionario}
                        onKeyUp = {keyHandlerFun}
                    />
                </CTh>
                <CTh/>
                <CTh/>
            </CTr>
        )
    }
 } 

const mapStateToProps = state => ({description: state.movimentacoes.description,funcionario: state.movimentacoes.funcionario});
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({searchDescription,searchFuncionario,changeDescription,changeFuncionario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Search)