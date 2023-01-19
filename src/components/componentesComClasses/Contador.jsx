import React, {Component} from 'react'
import ContadorDisplay from './ContadorDisplay'
import ContadorBtns from './ContadorBtns'
import PassoForm from './PassoForm'
class Contador extends Component {

    state = {
        valor: this.props.valorInicial,
        passo: this.props.passoInicial || 1, // Podemos definir o valor da prop direto no statate como valor padrao, ou definir esse valor ao chamar o componente, como foi feito com a propriedade valorInicial. 
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    // setPasso = (e) => {
    //     this.setState({
    //         passo: +e.target.value  // o tipo de e.target.value é strig. O + no inicio converte para int, evitando a concatenação.
    //     })
    // }
    setPasso = (novoPasso) => {
        this.setState({
             passo: novoPasso 
        })
    }



    render(){
        return(
            <div>
                <h2>Contador</h2>

                {/* <h3>{this.state.valor}</h3> */}
                <ContadorDisplay valor={this.state.valor} />

                {/* <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="contador">Passo: {this.state.passo} - </label>
                    <input type="number" id="contador" onChange={this.setPasso} value={this.state.passo}/>
                </div> */}
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>

                {/* <button onClick={this.decrementar}>-</button>
                <button onClick={this.incrementar}>+</button> */}
                <ContadorBtns incrementar={this.inc} decrementar={this.dec}/>
            </div>
        )
    }
}

export default Contador




/*

    O método render vai exibir o conteúdo na tela com o jsx

    Definimos o estado do componente através state que neste cenário é um objeto.
    Dentro do state, definimos os valores que serao enviados para o render exibir na tela.
    Os Valores tbm sao enviados via props em componentes de classe

    Para alterar o stado, usamos o método setState do React
    Importante: funcoes nomeadas dentro de classes, podem dar problema com o this, neste caso teremos que usar o bind para amarrar o this ao contexto correto.
                Podemos resolver este problema usando funcoes arrow onde o contexto do this nao muda.

    Obs. Os códigos comentados foram substituídos por componentes funcionais. 
*/

