import React, { useState} from 'react';

function Hooks () {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>HOOKS</h1>
            <p>Valor del contador: {counter}</p>
            <button onClick = {() => setCounter(counter +1)}>Agrega +1</button>
        </>
    )
}

export default Hooks;