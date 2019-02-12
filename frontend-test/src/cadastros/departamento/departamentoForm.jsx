import React from 'react'
import Grid from '../../layout/grid'
import IconButton from '../../common/template/iconButton'

export default props => {
    
    return(
        <div role='form' className='todoForm centerDep'>
            <Grid cols = '3 3 5'> 
                <input id='departamento' className='form-control' 
                placeholder='Adicione um departamento' onChange={props.handleChange}
                value={props.departamento} maxLength='100'></input>
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