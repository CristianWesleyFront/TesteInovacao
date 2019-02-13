import React from 'react'
import Functions from './TableList_Movimentacao_Functions'
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
                {Functions(props.list,props.Remove)}
            </CTbody>
        </CTable>
    )

}

const mapStateToProps = state => ({list: state.movimentacoes.list});
const mapDispatchToProps = (dispatch) => 
    bindActionCreators({Remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(listaMovimentacao)

    
    

// ){
    

    
//     const renderRows = () =>{
//         const list = props.list || []
//         return list.map(list => (
//             <tr key={list._id}>
//                 <td class='tabelaLinha'>{list.description}</td>
//                 <td>{list.funcionario}</td>
//                 <td>{list.valor}</td>
//                 <td>
//                     <IconButton style='danger' icon='trash-o' onClick={()=>props.handleRemove(list)}></IconButton>
//                 </td>
//             </tr>
//         ))
//     }

//     return (
//         <div>
            
//             <table className='table table-bordered table-striped table-hover table-condensed lista table-sla'>
                
//                 {/* <thead>
//                     <tr>
//                         <th>Descriçao</th>
//                         <th className='tbcenter'>Funcionario</th>
//                         <th className='tbcenter'>Valor R$</th>
//                         <th className='tableActions'></th>
//                     </tr>

//                     <tr>
//                         <th>
//                             <Input 
//                                 id='description' 
//                                 description='Pesquisar por descrição'
//                                 Change={props.handleChange}
//                                 Key = {keyHandler}
//                                 value={props.description}>
//                             ></Input>
//                             {/* <input 
//                                 id='description' 
//                                 className='form-control' 
//                                 placeholder='Pesquisar por descrição' 
//                                 onChange={props.handleChange}
//                                 onKeyUp = {keyHandler}
//                                 value={props.description}>
//                             </input> }
//                         </th>
                        
//                         <th>
//                             <input 
//                                 id='funcionario' 
//                                 className='form-control' 
//                                 onKeyUp = {keyHandlerFun}
//                                 placeholder='Pesquisar por funcionario' 
//                                 onChange={props.handleChangeFun}
//                                 value={props.funcionario}>
//                             </input>
//                         </th>
//                         <th></th>
//                     </tr>
//                 </thead> */}
               
//                 <tbody>
//                     {renderRows()}
//                 </tbody>
//             </table>
//         </div> 
//     )  
// }