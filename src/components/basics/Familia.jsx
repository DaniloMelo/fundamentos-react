import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Danilo" sobrenome={props.sobrenome}/>  {/* desta forma, estamos pegando apenas a prop sobrenome que foi definida no componente pai, no arquivo App.jsx */}
            <FamiliaMembro nome="Romilda" {...props}/>  {/* tambem podemos usar o spread. Porem nao definimos o atributo sobrenome="" */}
            <FamiliaMembro nome="Elias" sobrenome="Alves"/>
        </div>
    )
}

/*
    Por padrão, um componente pai nao passa os parametros para os filhos. 
    Podemos alterara esse comportamento definindo os parametros no componente pai (quando usamos o componente no app.jsx ou index.js) 
    e depois, ainda no componente pai, passamos essas props para os filhos.  

*/