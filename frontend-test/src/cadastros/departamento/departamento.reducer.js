const INITIAL_STATE = {
    deparmento: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DEPARTAMENTO_CHANGED':
            return { ...state, deparmento: action.payload }
        case 'DEPARTAMENTO_REFRESH': 
        return { ...state, list: action.payload } 

        case 'DEPARTAMENTO_CLEAR': 
            return {...state, deparmento: ''}
        default : 
            return state
    }
}