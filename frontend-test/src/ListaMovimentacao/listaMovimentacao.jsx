import React from 'react'
import IconButton from '../common/template/iconButton'

export default props => {
    
    const keyHandlerFun = () => props.handleSearchFun() 
    const keyHandler = () => props.handleSearch() 
    
    const renderRows = () =>{
        const list = props.list || []
        return list.map(list => (
            <tr key={list._id}>
                <td class='tabelaLinha'>{list.description}</td>
                <td>{list.funcionario}</td>
                <td>{list.valor}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={()=>props.handleRemove(list)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className='table table-bordered table-striped table-hover table-condensed lista table-sla'>
                <thead>
                    <tr>
                        <th>Descriçao</th>
                        <th >Funcionario</th>
                        <th>Valor</th>
                        <th className='tableActions'></th>
                    </tr>

                    <tr>
                        <th>
                            <input 
                                id='description' 
                                className='form-control' 
                                placeholder='Pesquisar por descrição' 
                                onChange={props.handleChange}
                                onKeyUp = {keyHandler}
                                value={props.description}>
                            </input>
                        </th>
                        
                        <th>
                            <input 
                                id='funcionario' 
                                className='form-control' 
                                onKeyUp = {keyHandlerFun}
                                placeholder='Pesquisar por funcionario' 
                                onChange={props.handleChangeFun}
                                value={props.funcionario}>
                            </input>
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div> 
    )  
}