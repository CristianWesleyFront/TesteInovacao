import axios from 'axios'
import URL from '../../common/js/URL'

export const changeDepartamento = (event) =>({
    type: 'DEPARTAMENTO_CHANGED',    
    payload: event.target.value
})

export const addDepartamento = (departamento) =>{
    return dispatch =>{
        axios.post(URL.URLDepartamento, { departamento })
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
    axios.delete(`${URL.URLDepartamento}/${departamento._id}`)
        .then(resp => dispatch(refresh()))
}

