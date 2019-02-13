import axios from 'axios'
import URL from '../common/js/URL'

export const Remove = (list) => {    
    return dispatch =>{
        axios.delete(`${URL.URLMovimentacao}/${list._id}`)
        .then(resp => dispatch(searchDescription()))
    }
}

export const handleClear = () =>{
    return [{type: 'CLEAR'},searchDescription()]
}

export const searchDescription = () => {
    return (dispatch, getState) => {
        const description = getState().movimentacoes.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL.URLMovimentacao}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'DESCRIPTION_SEARCHED',payload: resp.data}))
    }
}

export const searchFuncionario = () => {
    return (dispatch, getState) => {
        const funcionario = getState().movimentacoes.funcionario
        const search = funcionario ? `&funcionario__regex=/${funcionario}/` : ''
        const request = axios.get(`${URL.URLMovimentacao}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'FUNCIONARIO_SEARCHED',payload: resp.data}))
    }
}

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',    
    payload: event.target.value
})

export const changeFuncionario = (event) => ({
    type: 'FUNCIONARIO_CHANGED',    
    payload: event.target.value
})
