const INITIAL_STATE = {
    description: '', list: [], funcionario: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
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
