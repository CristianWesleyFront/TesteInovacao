import React from 'react'
import Content from '../common/content'
import ContentHeader from '../common/contentHeader'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(list => (
            <tr key={list._id}>
                <td>{list.titulo}</td>
                <td>{list.funcionario}</td>
                <td>{list.departamento}</td>
                <td>{list.valor}</td>
                <td>
                    {/* <IconButton style='success' icon='check' hide={todo.done}
                        onClick={()=> props.handleMarkAsDone(todo)}></IconButton>
    
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={()=> props.handleMarkAsPending(todo)}></IconButton>
    
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={()=>props.handleRemove(todo)}></IconButton> */}
                </td>
            </tr>
        ))
    }
    return (
        <div>
        <ContentHeader title='Lista de Movimentações' small='chablau' />
        <Content>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Movimentações</th>
                        <th className='tableActions'>Funcionario</th>
                        <th>Departamento</th>
                        <th>Valor</th>
                    </tr>
                    
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
            
            </table>
        </Content>
         
    </div> 
    )
    
}