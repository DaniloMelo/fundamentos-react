import React from 'react'
import listaAlunosData from '../../data/alunos'

export default props => {

    const listaAlunos = listaAlunosData.map(aluno => {
        return (
            <li key={aluno.id}>
                Aluno: {aluno.nome}.
                Nota: {aluno.nota}.
            </li>
        )
    })

    return (
        <div>
            <ul>
                {listaAlunos}
            </ul>
        </div>
    )
}

