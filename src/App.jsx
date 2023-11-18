import { useState, useEffect } from 'react'
import axios from 'axios'

import { Busca } from './components/Busca'
import { ClimaAtual } from './components/ClimaAtual'
import { Previsao } from './components/Previsao'
import { Wrapper } from './components/Wrapper'

function App() {
  const [cidade, setCidade] = useState('')

  return (
    <Wrapper>
      <h1>Condições Climáticas</h1>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </Wrapper>
  )
}

export default App
