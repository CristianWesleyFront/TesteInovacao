const INITIAL_STATE = {
    funcinario: '',descricao: '',listFuncionarios: [], valor: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FUNCIONARIO_CHANGED':
            return { ...state, funcinario: action.payload }
        case 'DEPARTAMENTO_CHANGED':
            return { ...state, departamento: action.payload }
        case 'FUNCIONARIO_REFRESH': 
            return { ...state, listFuncionarios: action.payload } 
        case 'DEPARTAMENTO_REFRESH': 
            return { ...state, listDepartamentos: action.payload } 
        case 'FUNCIONARIO_CLEAR': 
            return {...state, funcinario: '',departamento: ''}
        default : 
            return state
    }
}