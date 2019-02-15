import React from 'react'

export default props => (
    <table className={'table table-bordered table-striped table-hover table-condensed '+ props.type}>
        {props.children}
    </table>
)