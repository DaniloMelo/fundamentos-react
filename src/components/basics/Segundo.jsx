import React from 'react'

export default function Segundo(props){

    //console.log(props)
    
    // Props é um objeto e seus valores sao os parametros/propriedades passadas quando usamos esse componente. 
    // As props sao somente de leitura, nao conseguimos alterar os valores das props. 
    
    // Para fazermos alguma operacao com o valor das props, precisamos atribuir essa prop a uma variável. 
    // No ex abaixo foi feita uma operacao com a prop media, que essa opracao foi atribuida a uma variavel e depois a mesma var foi chamada na renderizacao do componente. 
     
    const media = props.nota >= 7 ? 'Aprovado' : 'Reprovado' // quando passamos um valor numérico e nao uma string como prop, podemos fazer operações.

    return (
        <div>
            <h1>Aprendendo {props.tech} com props</h1>
            <h2>Segundo componente com propriedades</h2>
            <p>O aluno {props.nome} tem nota: {props.nota}.</p>
            <p>Situação: {media}</p>
        </div>
    )
}

