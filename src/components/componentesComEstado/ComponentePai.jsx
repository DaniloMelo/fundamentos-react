import React, {useState} from 'react'
import ComponenteFilho from './ComponenteFilho'

export default props => {
    const [nome, setNome] = useState('')
    const [nota, setNota] = useState('')

    console.log(typeof(useState))

    function callBack (nome, nota){
        setNome(nome)
        setNota(nota)
    }

    return (
        <div>

            <div>
            <p>Nome: {nome}. Nota: {nota} Situtação: {nota >= 7 ? "Aprovado" : "Reprovado"}</p>
            </div>

            <ComponenteFilho receberDados={callBack}/>
        </div>
    )
}



/*

O componente filho que é um button, vai passar os dados para o pai exibir na tela (comunicacao indireta do filho para o pai). Veja indiretaPai.jsx 

Quando o evento de click do botao é acionado, a callBack é chamada enviando os dados para o componente pai exibir na tela com o uso do hook useState.

O useState é uma funcao que retorna um array de 2 posicoes. 
A primeira, é a variável que armazena o valor e a segunda, uma funcao que é responsavel por mudar o valor desta variável.
O valor inicial desta variável é setada nos parametros do useState("valorInicial")

*/