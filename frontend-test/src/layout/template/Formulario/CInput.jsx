import React from 'react'

export default props => (
    <input {...props.input}
        
        className='form-control'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        >
    </input>
)