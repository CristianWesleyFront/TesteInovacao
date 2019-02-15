import React from 'react'
import Grid from '../../../layout/bootstrap/grid'
import InputFuncionario  from '../../../layout/template/Formulario/InputForRedux'
import Select from './selectDertamento'
import { reduxForm, Field } from 'redux-form'



const FuncionarioForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props

    return(
        <form role='form'  onSubmit={handleSubmit}>
            <div className='centerForm'>
                <Field 
                    name='name' 
                    type='input'
                    component={InputFuncionario}
                    cols='3 3 7' 
                    placeholder='Adicione um Funcionario'
                />
                
                <Select />
                    
                <Grid cols='1 1 1'>
                    <button  className='btn btn-primary' type="submit" disabled={pristine || submitting}>
                        <i className={'fa fa-plus'}></i>
                    </button>
                </Grid>
            </div>
        </form>
        )
    }

export default reduxForm({
    form: 'funcionarioForm' // a unique identifier for this form
  })(FuncionarioForm)

