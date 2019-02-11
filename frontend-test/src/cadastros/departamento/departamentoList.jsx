import React from 'react'
import IconButton from '../../common/template/iconButton'

export default props => {
    const renderRows = () =>{
        const list = props.listDepartamentos || []
        return list.map(list => (
            <tr key={list._id}>
                <td>{list.name}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={()=>props.handleRemove(list)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className='table table-bordered table-striped table-hover table-condensed lista table-sla-dep'>
                <thead>
                    <tr> 
                        <th>Departamento</th>
                        <th className='tableActions'></th>
                    </tr>
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div> 
    )  


}