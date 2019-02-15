import axios from 'axios'
import URL from '../../common/js/URL'

export const changeFuncionario = (event) => (
    {
        type: 'FUNCIONARIO_CHANGED',    
        payload: event.target.value
    }
)

export const changeDepartamento = (newValue) =>{
    let desp = []
    for(let i=0 ; i < newValue.length; i++){
        desp[i] = newValue[i].value
    }
    return (
        {
            type: 'DEPARTAMENTO_CHANGED',    
            payload: desp
        }
    )
}

export const AddFuncionario = (funcionario,depart) => {
    const name =  funcionario
    const departamento = depart
    return dispatch =>{
        axios.post(URL.URLFuncionario, { name, departamento })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(refresh()))
    }
}

export const removeFuncionario =(funcionario)=> { 
    return dispatch => {
        axios.delete(`${URL.URLFuncionario}/${funcionario._id}`)
        .then(resp => dispatch(refresh()))
    }   
}

export const clear = () => {
    return [{ type : 'FUNCIONARIO_CLEAR' }, refresh()]
}

export const refresh = () => {
    return dispatch => {
        axios.get(`${URL.URLFuncionario}?sort=-createdAt`)
            .then(resp => dispatch({type: 'FUNCIONARIO_REFRESH',payload: resp.data}))
            .then(axios.get(URL.URLDepartamento)
                .then(resp => dispatch({type:'DEPARTAMENTO_REFRESH',payload: resp.data})))
    }
}


