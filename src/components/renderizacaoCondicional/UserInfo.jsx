import React from 'react'
import If from './If'

export default props => {

    return (
        <div>
            <If condition={props.user}>
                <span>Bem vindo, {props.user.name}</span>
            </If>
        </div>

    )
}


//  Exemplo 2
//  Neste exemplo foi criado um componente que faz um if e a condicao é passada como prop.
//  Caso o retorno da prop seja true, o conteudo é renderizado de acordo como foi definido na funcao do arquivo/componente If.js



