import React from 'react'
import Functions from './TableList_Functions'
import HeadTable from './headTable'
import CTable from '../../layout/template/table/CTable'
import CTbody from '../../layout/template/table/CTbody'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Remove } from '../Movimentacoes.Actions'


const listaMovimentacao = props => {
    return (    
        <CTable>
            <HeadTable />
            <CTbody>
                {Functions(props.list,props.Remove,'movimentacao')}
            </CTbody>
        </CTable>
    )

}

const mapStateToProps = state => ({list: state.movimentacoes.list});
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({Remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(listaMovimentacao)