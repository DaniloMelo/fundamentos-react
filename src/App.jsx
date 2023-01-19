import './App.css'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import Segundo from './components/basics/Segundo'
import Fragment from './components/basics/Fragment'
import DesafioNumAleatorio from './components/basics/DesafioNumAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaEx2 from './components/basics/FamiliaEx2'
import FamiliaMembroEx2 from './components/basics/FamiliaMembroEx2'
import ListaAlunos from './components/repeticao/ListaAlunos'
import DesafioTabelaDeProdutos from './components/repeticao/DesafioTabelaProdutos'
import ParOuImpar from './components/renderizacaoCondicional/ParOuImpar'
import UserInfo from './components/renderizacaoCondicional/UserInfo'
import ComunicacaoDireta from './components/comunicaoDiretaEIndireta/DiretaPai'
import ComunicacaoIndireta from './components/comunicaoDiretaEIndireta/IndiretaPai'
import ComponentesComEstado from './components/componentesComEstado/ComponentePai'
import ComponenteControlado from './components/componenteControlado/Formulario'
import Contador from './components/componentesComClasses/Contador'

export default () => (
    (
        <div className='App'>
            <h1>Fundamentos React</h1>
            
            <div className='Cards'>
                <Card titulo="Primeiro componente" cor="#ffafbd">
                    <Primeiro></Primeiro>
                </Card>
                
                <Card titulo="Componentes com props" cor="#a8c0ff">
                    <Segundo tech="React" nome="Danilo" nota={10} />
                </Card>

                <Card titulo="React fragments" cor="#19471e"> 
                    <Fragment />
                </Card>
                
                <Card titulo="Desafio número aleatório" cor="#dd1818">
                    <DesafioNumAleatorio min={0} max={100} />
                </Card>

                <Card titulo="Componentes com filhos - Exemplo 1" cor="#f7971e">
                    <Familia sobrenome="Marques"/>  
                </Card>

                <Card titulo="Componentes com filhos - Exemplo 2" cor="#f7971e">
                    <FamiliaEx2 sobrenome="Marques">
                        <FamiliaMembroEx2 nome="Danilo" />
                        <FamiliaMembroEx2 nome="Romilda"/>
                        <FamiliaMembroEx2 nome="Elias" />
                    </FamiliaEx2>  
                </Card>

                <Card titulo="Lista de elementos" cor="#800080">
                    <ListaAlunos />
                </Card> 

                <Card titulo="Desafio Tabela de Produtos" cor="#dd1818">
                    <DesafioTabelaDeProdutos />
                </Card>

                <Card titulo="Renderização Condicional - Exemplo 1" cor="#0f9b0f">
                    <ParOuImpar num={11} />
                </Card>

                <Card titulo="Renderização Condicional - Exemplo 2" cor="#0f9b0f">
                    <UserInfo user={{name: "Danilo"}} />
                </Card>

                <Card titulo="Comunicação Direta" cor="#aa9de3">
                    <ComunicacaoDireta />
                </Card>

                <Card titulo="Comunicação Indireta" cor="#aa9de3">
                    <ComunicacaoIndireta />
                </Card>

                <Card titulo="Comunicação Indireta com estados (useState)" cor="#aa9de3">
                    <ComponentesComEstado />
                </Card>

                <Card titulo="Componente Controlado" cor="#cac531">
                    <ComponenteControlado />
                </Card>

                <Card titulo="Conponente Com Classes - ex contador" cor="#000c40">
                    <Contador valorInicial={10} />
                </Card>

            </div>      
        </div>
    )
)



// export default usamos para funções anônimas, no caso apenas uma funcao. 
// quando temos mais de uma funcao nomeada, usamos o export nomeDafunc(){}