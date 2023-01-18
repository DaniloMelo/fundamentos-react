import React from 'react'

export default props => {

    return(
        <div>
           
           <button onClick={e=> props.receberDados('Danilo', 10)}>Enviar Dados</button>
           
        </div>
    )
}