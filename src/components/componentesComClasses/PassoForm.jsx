import React from 'react'

export default props => {

    return (
        
        <div style={{ display: "flex", flexDirection: "column" }}>
            
            <label htmlFor="contador">Passo: {props.passo} - </label>
            
            <input type="number" id="contador" onChange={e => props.setPasso(+e.target.value)} value={props.passo} />
            

        </div>
    )
}

// o tipo de e.target.value é strig. O + no inicio converte para int, evitando a concatenação.