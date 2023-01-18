import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    function receberDados (nome, nota){
        console.log(nome, nota)
    }

    return (
        <div>
            <div>Pai</div>

            <IndiretaFilho quandoClicar={receberDados}/>
        </div>
    )
}

/*

A comunicao indireta acontece quando o componente filho precisa enviar dados para o pai. 

O componente pai passa uma funcao callBack como prop para os filhos. 
Essa callBack é chamada quando ocorrer algum evento no filho e a funcao é retornada para o pai com os dados. 

Observação:
Não conseguimos exibir estes dados na tela, somente no console devido ao react trabalhar com estados em seus componentes.
Para o componnte exibir algo na tela, ele precisa ser informado que seu estado mudou, para isso usamos o hook useState. Veja ComponentesComEstado.

*/