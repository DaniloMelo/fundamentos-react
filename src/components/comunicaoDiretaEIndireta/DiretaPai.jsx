import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    return (
        <div>
            <DiretaFilho aluno="Danilo" nota={10}/>
            <DiretaFilho aluno="Chuck Norris" nota={0}/>
        </div>
    )
}

/*
A comunicacao direta aconteçe através das props.
passamos dados diretamente entre Componentes Pai e Filho, quando importamos o Componente Filho no Pai (relação direta).

Desta forma, dentro do componente pai podemos instaciar novos componentes filhos passando os dados pelas props. 

O componente pai pode ter uma prop e seu valor ser passado para os filhos. Ver o ex Famila.jsx e familiaMembro.jsx - Componentes com filhos - Exemplo 1
*/