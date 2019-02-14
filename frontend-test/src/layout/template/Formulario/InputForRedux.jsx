import React from 'react'
import Grid from '../../bootstrap/grid'

export default props => {
    return (
        <Grid cols={props.cols}>  
                <input {...props.input}
                    className='form-control'
                    placeholder={props.placeholder}
                    type={props.type}
                />
        </Grid>
    )
}
