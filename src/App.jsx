import { useState, useEffect } from 'react'
import axios from 'axios'

import { Busca } from './components/Busca'
import { ClimaAtual } from './components/ClimaAtual'
import { Previsao } from './components/Previsao'
import { Wrapper } from './components/Wrapper'

function App() {
  const [cidade, setCidade] = useState(
    localStorage.getItem('cidade_atual') || '',
  )
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY || ''

  async function buscarClima() {
    try {
      const responseClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`,
      )

      setClima(responseClima.data)
      localStorage.setItem('cidade_atual', cidade)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <Wrapper>
      <h1>Condições Climáticas</h1>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao clima={clima} />}
    </Wrapper>
  )
}

export default App
