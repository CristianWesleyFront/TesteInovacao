import axios from 'axios'
import URL from '../../common/js/URL'


const ChangeDescription = (e) => (
    {
        type: 'DESCRIPTION_CHANGE',
        payload: e.target.value
    }
)
// handleChangeFuncionario(newValue){
//     let j = newValue.value
//     console.log(newValue)
//     this.setState({...this.state, funcionario: j})
// }
// handleChangeValor(e){
//     console.log(e.target.value)
//     this.setState({...this.state, valor: e.target.value})
// }

// handleAdd(){
//     const funcionario = this.state.funcionario
//     const description = this.state.description
//     const valor = this.state.valor+',00'
//     console.log({funcionario:this.state.funcionario,description :this.state.description,valor:this.state.valor})
//     axios.post(URL, { description,funcionario, valor })
//         .then(resp => this.refresh())
//         .then(window.location.href = 'http://localhost:3000/')
// }
// handleClear(){
//     this.refresh()
// }
// refresh() {
//     axios.get(URLFun)
//         .then(resp => this.setState({...this.state, listFun: resp.data}))      
// }