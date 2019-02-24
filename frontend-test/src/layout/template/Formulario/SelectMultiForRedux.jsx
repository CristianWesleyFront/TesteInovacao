import React from 'react'
import Select from 'react-select';
import funcionarioForm  from '../../../cadastros/funcionario/funcionarioForm/RenderForm.Funcionario'
import { change as changeFieldValue } from 'redux-form'
import Grid from '../../bootstrap/grid';
import { connect } from 'react-redux'

const renderOption = (lista) => {
    const list = lista || []
    return list.map((list,index,array) => (
        list[index]={value:list.name, label:list.name}
 ))
}

const onChange = function(event,props) {
  console.log(event)
  let options = event
  let selectedOptions = [];
  if (options) {
    for (let x = 0; x < options.length; x++) {
      if (options[x].selected) {
        selectedOptions.push(options[x].value);
      }
    }
    if (changeFieldValue)
      changeFieldValue(props.desp, selectedOptions);
  }
}
// const onChange = function(newValue) {
//     console.log(newValue)
//     let desp = []
    
    
//     let options = newvalue.value;
//     let selectedOptions = [];
//     if (desp) {
//         for(let i=0 ; i < newValue.length; i++){
//           desp[i] = newValue[i].value
//           console.log(desp)
//         }
//       if (changeFieldValue)
//         changeFieldValue(funcionarioForm, desp);
//     }
// }

// export default props => (
//   <Grid cols={props.cols}>
//       {/* {console.log(props.list)} */}
//       <Select
//         isMulti
//         name={props.name}
//         options={renderOption(props.list)}
//         className="basic-multi-select "
//         classNamePrefix={props.name}
//         onChange={onChange}
//         placeholder={props.name}
//         />
//   </Grid>
// )      
   
// const mapStateToProps = state => ({desp: state.funcionario.departamentoF });
// export default connect(mapStateToProps,null)(onChange)