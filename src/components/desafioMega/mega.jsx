import React, { useState } from 'react'

export default props => {

    function gerarNumAleatorioUnico(min, max, arr) {
        const numAleatorio = parseInt(Math.random() * (max + 1 - min) + min)

        return arr.includes(numAleatorio) ? gerarNumAleatorioUnico(min, max, arr) : numAleatorio
    }

    function gerarArrayDeNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce(num => {
                const novoNumero = gerarNumAleatorioUnico(1, 60, num)
                return [...num, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
            .join(" - ")

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)

    const numerosIniciais = Array(qtde).fill(0)

    const [numerosMega, setNumerosMega] = useState(numerosIniciais)

    return (
        <div>
            <h3>Numeros Sorteados</h3>
            <h2>{numerosMega}</h2>

            <div>
                <label> Quantos números sortear?</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
                <button onClick={e => setNumerosMega(gerarArrayDeNumeros(qtde))}>Sortear</button>
            </div>
        </div>
    )
}