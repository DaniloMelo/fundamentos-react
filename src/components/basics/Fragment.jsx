import React from 'react'

export default function Fragment (){
    return (
        <React.Fragment id="param-de-teste">
            <h1>Aprendendo sobre react fragments</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
        </React.Fragment>
    )
}

/*
    Com o react.fragment, podemos retornar elementos JSX sem o envolvimento de uma tag div. 

    Podemos tambem usar de forma reduzida, porem essa forma nao aceita parametros, como por ex id=""
        <>
            <h1>Aprendendo sobre react fragments</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
        </>
*/