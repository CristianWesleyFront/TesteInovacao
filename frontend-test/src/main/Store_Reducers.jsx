import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import MovimentacoesReducer from '../ListaMovimentacao/Movimentacoes.Reducer'
import departamentoReducer from '../cadastros/departamento/departamento.reducer'
import funcionarioReducer from '../cadastros/funcionario/funcionario.reducer'
const rootReducer = combineReducers({
    movimentacoes: MovimentacoesReducer,
    departamento: departamentoReducer,
    funcionario: funcionarioReducer,
    form: formReducer
})
export default rootReducer 