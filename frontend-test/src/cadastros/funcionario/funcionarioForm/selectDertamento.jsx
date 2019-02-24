import React,{Fragment} from 'react'
import { Field} from 'redux-form'
import { connect } from 'react-redux'
import 'react-widgets/dist/css/react-widgets.css'
import Multiselect from 'react-widgets/lib/Multiselect'

const formatlist = props => {
    let list =  props.list
    let data = []
    list.map((element,index,array)=>{
        data.push(element.value)
    })
    return data
}

const renderMultiselect = ({ input, data, valueField, textField,placeholder }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
    placeholder={placeholder}
  />

const selectDepart = props => {
    const list = props.list
    const datax = []
    const formatlist =(list) => {
        let list1 =  list
        list1.map((element,index,array)=>{
            datax.push(element.name)
        })
    }
    return(
        <Fragment>
            {formatlist(list)}
            <Field name='departamento' component={renderMultiselect} data={datax} placeholder='Adicione um departamento'>
            </Field>
        </Fragment>
        )
}
    


const mapStateToProps = state => ({list: state.funcionario.listDepartamentos });
export default connect(mapStateToProps,null)(selectDepart)