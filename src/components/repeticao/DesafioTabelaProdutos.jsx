import './DesafioTabelaProdutos.css'
import React from 'react'
import produtosDB from '../../data/produtos'

export default props => {

    const produtos = produtosDB.map(produto => {

        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos}
                </tbody>
            </table>
        </div>
    )
}



