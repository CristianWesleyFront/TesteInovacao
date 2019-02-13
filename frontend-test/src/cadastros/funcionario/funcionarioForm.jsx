import React from 'react'
import Grid from '../../layout/bootstrap/grid'
import IconButton from '../../layout/template/iconButton'


import Select from 'react-select';

export default props =>{
    const renderOption = () => {
        const list = props.list || []
        return list.map((list,index,array) => (
            list[index]={value:list.name, label:list.name}
        ))
    }
    return(
        <div role='form' className='todoForm center'>
        <Grid cols = '3 3 5'> 
            <input id='name' className='form-control' 
            placeholder='Adicione um Funcionario' onChange={props.handleChange}
            value={props.name} maxLength='200'></input>
        </Grid>
        <Grid cols = '3 3 3'> 
            <Select
                isMulti
                name="departamentos"
                options={renderOption()}
                className="basic-multi-select"
                classNamePrefix="departamentos"
                onChange={props.handleChangeDe}
                placeholder="Departamentos"
            />
        </Grid>

        <Grid cols='4 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd} ></IconButton>
            <IconButton style='default' icon='close'
                onClick={props.handleClear}></IconButton>
        </Grid>
    </div>
    )
}
