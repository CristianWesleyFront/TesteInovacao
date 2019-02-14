import React from 'react'
import ContactForm from './RenderForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDepartamento } from './departamento.action'


 const ContactPage = props => {
  const submit = values => {
    props.addDepartamento(values.name)
  }
    return <ContactForm onSubmit={submit} />
  
}


const mapDispatchToProps = (dispatch) => 
    bindActionCreators({addDepartamento}, dispatch)
export default connect(null, mapDispatchToProps)(ContactPage)
