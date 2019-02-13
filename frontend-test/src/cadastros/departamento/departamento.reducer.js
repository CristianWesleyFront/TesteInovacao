const INITIAL_STATE = {
    deparmento: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DEPARTAMENTO_CHANGED':
            return { ...state, deparmento: action.payload }
        case 'FUNCIONARIO_CHANGED': 
            return { ...state, funcionario: action.payload } 
        case 'DESCRIPTION_SEARCHED': 
            return {...state, list: action.payload }
        case 'FUNCIONARIO_SEARCHED': 
            return {...state, list: action.payload }
        case 'CLEAR': 
            return {...state, description: '',funcionario: ''}
        default : 
            return state
    }
}