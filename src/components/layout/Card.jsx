import './Card.css'
import React from 'react'

export default props => {

    const cardColor = {
        backgroundColor: props.cor || "#f00",
        borderColor: props.cor || "#f00",
    }

    return (
        <div className="Card" style={cardColor}> 
            
            <div className='Title'>{props.titulo}</div>
            
            <div className='Content'>{props.children}</div>
            
        </div>
    )
}

/*

    Podemos passar propriedades CSS como parametro para os componentes e usar o atributo style do HTML para usar essas props.
    Podemos passar várias propriedades CSS em um objeto e referencia-lo no style da tag. 

*/
