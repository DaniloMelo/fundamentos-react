import React from 'react'
import Primeiro from './components/basics/Primeiro'
import Segundo from './components/basics/Segundo'
import Fragment from './components/basics/Fragment'
import DesafioNumAleatorio from './components/basics/DesafioNumAleatorio'

export default () => (
    (
        <div id="app">
            <h1>Fundamentos React</h1>
            
            <Primeiro></Primeiro>
            
            <Segundo tech="React" nome="Danilo" nota={10} />
            
            <Fragment />
            
            <DesafioNumAleatorio min={0} max={100} />
        </div>
    )
)