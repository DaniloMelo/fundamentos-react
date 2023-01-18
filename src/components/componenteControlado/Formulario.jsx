import React, {useState} from 'react'

export default props => {

    const [valorInp, setValorInp] = useState('Valor Inicial')

    function quandoMudar (e) {
        setValorInp(e.target.value)
    }


    return (

        <div>
            <input type="text" value={valorInp} onChange={quandoMudar}/>

            <h2>{valorInp}</h2>
        </div>
    )
}

