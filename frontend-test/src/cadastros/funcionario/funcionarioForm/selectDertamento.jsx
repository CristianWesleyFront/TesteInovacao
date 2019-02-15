import React,{Fragment} from 'react'
import SelectDepartamento from '../../../layout/template/Formulario/SelectMultiForRedux'
import { Field,formValueSelector } from 'redux-form'
import { connect } from 'react-redux'


const selectDepart = props => {
    const list = props.list
    return(
        <Fragment>
            {/* {console.log(props.list)} */}
            <Field  
                name='departamento' 
                component={SelectDepartamento}
                placeholder='Adicione um departamento'
                list={list}
                cols='3 3 4'
            />
        </Fragment>
        )
}
    

const selector = formValueSelector('funcionarioForm')
const mapStateToProps = state => ({list: state.funcionario.listDepartamentos, departamentoF: selector(state, 'departamento')  });
export default connect(mapStateToProps,null)(selectDepart)