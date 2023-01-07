import React from 'react'

export default props => {

    const {min, max} = props

    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
    
    return (
        <>
            <h1>Desafio número aleatório</h1>
            <p>O número aleatório entre {min} e {max}, é:</p>
            <p> <strong> {numeroAleatorio} </strong> </p>
        </>
    )
}
 