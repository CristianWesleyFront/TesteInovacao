import React from 'react'
import Functions from '../../../ListaMovimentacao/TableList_Movimentacao/TableList_Functions'
import CTable from '../../../layout/template/table/CTable'
import CTbody from '../../../layout/template/table/CTbody'
import CTHead from '../../../layout/template/table/CTHead'
import CTr from '../../../layout/template/table/CTr'
import CTh from '../../../layout/template/table/CTh'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeDepartamento } from '../departamento.action'


const listaDepartamentos = (props) => {
    return (
        
            <CTable type='table-departamento'>
                <CTHead>
                    <CTr>
                        <CTh value='Departamentos'/>
                        <CTh value='Ação'/>
                    </CTr>
                </CTHead>
                
                <CTbody>
                    {Functions(props.list,props.removeDepartamento,'departamento')}
                </CTbody>
            </CTable>
     
    )  
}

const mapStateToProps = state => ({list: state.departamento.list});
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({removeDepartamento}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(listaDepartamentos)