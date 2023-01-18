import React from 'react'

export default props => {

    return (
        <div>
            <div>Filho</div>
            <button onClick={ e => props.quandoClicar("Danilo", 10) }>Enviar dados</button>
        </div>
    )
}