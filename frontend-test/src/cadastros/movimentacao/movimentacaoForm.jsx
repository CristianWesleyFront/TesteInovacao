import React from 'react'
import Grid from '../../layout/grid'
import IconButton from '../../common/template/iconButton'


import Select from 'react-select';

export default props =>{
    const renderOptionFun = () => {
        let list = props.listFun || []
        return list.map((list,index,array) => (
            list[index]={value:list.name, label:list.name}
        ))
    }
    const renderOptionDep = () => {
        let list = props.listDep || []
        return list.map((list,index,array) => (
            list[index]={value:list.name, label:list.name}
        ))
    }

    return(
        <div role='form' className='todoForm centerMovi'>
            <Grid cols = '3 3 5'> 
                <input id='Descrição' className='form-control marginBotton' 
                placeholder='Adicione um Descrição' onChange={props.handleChangeDescription}
                value={props.description}></input>

                <Select
                    name="Funcionario"
                    options={renderOptionFun()}
                    className="basic-multi-select marginBotton"
                    classNamePrefix="Funcionario"
                    onChange={props.handleChangeFuncionario}
                    placeholder="Funcionario"
                />
                <Select
                    name="departamentos"
                    options={renderOptionDep()}
                    className="basic-multi-select marginBotton"
                    classNamePrefix="departamentos"
                    onChange={props.handleChangeDepartamento}
                    placeholder="Departamentos"
                />

                <input id='Valor' className='form-control marginBotton' 
                placeholder='Adicione um Valor R$' onChange={props.handleChangeValor}
                value={props.valor}></input>
                <br></br>

                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd} ></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
            
        </div>
    )
}
