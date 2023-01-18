import React from 'react'

export default props => {

    return (
        <div>
            Aluno: {props.aluno}. Nota: {props.nota}. Situação: {props.nota >= 7 ? 'Aprovado' : 'Reprovado'} 
        </div>
    )
}

