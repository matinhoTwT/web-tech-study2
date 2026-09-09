import React, { useState } from 'react'

function index() {
    // Inicializa o estado com o valor 0
  const [count, setCount] = useState(0);

   // função para aumentar o valor do estado 
  const aumentar = ()=> {
    setCount(count + 1)
  }

  // função para diminuir o valor do estado
  const diminuir = () => {
    setCount(count - 1)
  }

  return (
    <div style ={{textAlign: 'Center', marginTop: '50px', marginBottom: '50px'}}>
        <h1>{count}</h1>
        <button onClick = {aumentar}>Aumentar</button>
        <button onClick = {diminuir}>Diminuir</button>
        
   </div>
  )
}

export default index