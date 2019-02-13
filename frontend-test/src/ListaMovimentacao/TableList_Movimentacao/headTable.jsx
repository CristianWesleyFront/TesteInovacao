import React,{Fragment} from 'react'

import CTHead from '../../layout/template/table/CTHead'
import TrInput from './headTable.Tr.TrInput'
import TrHead from './headTable.Tr.TrHead'

export default props => (
    <Fragment>
        <CTHead>
            <TrHead />
            <TrInput />
        </CTHead>
    </Fragment>
)