import axios from 'axios'
import URL from '../../common/js/URL'

export const changeDepartamento = (event) =>({
    type: 'DEPARTAMENTO_CHANGED',    
    payload: event.target.value
})

export const addDepartamento = (departamento) =>{
    const name =  departamento
    return dispatch =>{
        axios.post(URL.URLDepartamento, { name })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(refresh()))
    }
 }

export const clear = () => {
    return [{ type : 'DEPARTAMENTO_CLEAR' }, refresh()]
}

export const refresh = () => {
    return dispatch => {
        axios.get(`${URL.URLDepartamento}?sort=-createdAt`)
            .then(resp => dispatch({type: 'DEPARTAMENTO_REFRESH',payload: resp.data}))
    }
}

export const removeDepartamento =(departamento)=> { 
    return dispatch => {
        axios.delete(`${URL.URLDepartamento}/${departamento._id}`)
        .then(resp => dispatch(refresh()))
    }   
}

// function submit(values, methods){
//     return dispatch => {
//         const id = values._id ? values._id : ''
//         axios[methods](`${BASE_URL}/billingCycles/${id}`, values)
//         .then(resp => {
//             // toastr.success('Sucesso', 'Operação realizada com sucesso')
//             dispatch(refresh())
//         })
//         .catch(e => {
//             e.response.data.errors.forEach(error => 
//                 toastr.error('Erro',error))
//         })
//     }
//}