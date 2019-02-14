import React,{Component} from 'react'
import Grid from '../../layout/bootstrap/grid'
import InputDepartamento  from '../../layout/template/Formulario/InputForRedux'

import { reduxForm, Field } from 'redux-form'

const DepartamentoForm = props => {
         const {handleSubmit, pristine, reset, submitting} = props
        return(
            <form role='form' className='todoForm centerDep' onSubmit={handleSubmit}>
               
                <Field name='name' component={InputDepartamento}
                 cols='12 4' placeholder='Informe o nome'/>
                
                <Grid cols='4 3 2'>
                <button  className='btn btn-primary' type="submit" disabled={pristine || submitting}>
                    
                    <i className={'fa fa-plus'}></i>
                </button>
                </Grid>
            </form>
        )
    }

export default reduxForm({
    form: 'departamentoForm' // a unique identifier for this form
  })(DepartamentoForm)