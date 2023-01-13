import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
           
            {props.children.map((child, i) =>{
                return React.cloneElement(child, {...props, key: i})
            })}
        </div>
    )
}

// O cloneElement recebe dois parametros, o primeiro é o elemento que será clonado, e o segundo sao suas props. 
// podemos usar o spread/rest para clonar o objeto com as props. Ou podemos tbm usar sem o spread/rest



