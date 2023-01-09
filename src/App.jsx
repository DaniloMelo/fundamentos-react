import './App.css'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import Segundo from './components/basics/Segundo'
import Fragment from './components/basics/Fragment'
import DesafioNumAleatorio from './components/basics/DesafioNumAleatorio'
import Card from './components/layout/Card'

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

                <Card titulo="React fragments" cor="#dd1818">
                    <Fragment />
                </Card>
                
                <Card titulo="Desafio número aleatório" cor="#f7971e">
                    <DesafioNumAleatorio min={0} max={100} />
                </Card>
            </div>      
        </div>
    )
)



// export default usamos para funções anônimas, no caso apenas uma funcao. 
// quando temos mais de uma funcao nomeada, usamos o export nomeDafunc(){}