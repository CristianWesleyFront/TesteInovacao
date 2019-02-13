import { combineReducers } from 'redux'
import MovimentacoesReducer from '../ListaMovimentacao/Movimentacoes.Reducer'
import departamentoReducer from '../cadastros/departamento/departamento.reducer'
const rootReducer = combineReducers({
    movimentacoes: MovimentacoesReducer,
    departamento: departamentoReducer
})
export default rootReducer 