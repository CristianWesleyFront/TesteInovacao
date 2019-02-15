import React from 'react'
import ContactForm from './RenderForm.Funcionario'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AddFuncionario } from '../funcionario.action'


 const ContactPage = props => {
  
  const submit = values => {
    console.log(values.name)
    console.log(values.departamento)
    props.AddFuncionario(values.name,values.departamento)
  }
    return <ContactForm onSubmit={submit} />
  
}


const mapDispatchToProps = (dispatch) => 
    bindActionCreators({AddFuncionario}, dispatch)
export default connect(null, mapDispatchToProps)(ContactPage)
