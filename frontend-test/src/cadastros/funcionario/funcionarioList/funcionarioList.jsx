import React from 'react'
import Functions from '../../../ListaMovimentacao/TableList_Movimentacao/TableList_Functions'
import CTable from '../../../layout/template/table/CTable'
import CTbody from '../../../layout/template/table/CTbody'
import CTHead from '../../../layout/template/table/CTHead'
import CTr from '../../../layout/template/table/CTr'
import CTh from '../../../layout/template/table/CTh'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFuncionario } from '../funcionario.action'

const listaFuncionario = props => {

    return (
        <CTable type='table-funcionario'>
            <CTHead>
                <CTr>
                    <CTh>Funcionario</CTh>
                    <CTh>Departamento</CTh>
                    <CTh></CTh>
                </CTr>
            </CTHead>
            <CTbody>
                {Functions(props.list,props.removeFuncionario,'funcionario')}
            </CTbody>
        </CTable>
    )  
}

const mapStateToProps = state => ({list: state.funcionario.listFuncionarios });
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({removeFuncionario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(listaFuncionario)