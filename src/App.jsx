import { useState, useEffect } from 'react'
import axios from 'axios'

import { Busca } from './components/Busca'
import { ClimaAtual } from './components/ClimaAtual'
import { Previsao } from './components/Previsao'
import { Wrapper } from './components/Wrapper'

function App() {
  const [cidade, setCidade] = useState(
    localStorage.getItem('ultima_busca') || '',
  )
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY || ''

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`,
      )
      setCidade(resposta.data.name)
      setClima(resposta.data)
    })
  }, [apiKey])

  async function buscarClima() {
    try {
      const responseClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`,
      )

      setClima(responseClima.data)
      localStorage.setItem('ultima_busca', cidade)

      const responsePrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`,
      )

      setPrevisao(responsePrevisao.data.list.slice(0, 5))
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <Wrapper>
      <div className="mt-16 max-w-3xl flex flex-col w-full  p-4 drop-shadow-md bg-white rounded">
        <h1 className="text-zinc-700 font-bold text-[2rem]">
          Condições <span className="text-blue-800">Climáticas</span>
        </h1>
        <Busca
          cidade={cidade}
          setCidade={setCidade}
          buscarClima={buscarClima}
        />
        {clima && <ClimaAtual clima={clima} />}
        {previsao.length > 0 && <Previsao previsoes={previsao} />}
      </div>
    </Wrapper>
  )
}

export default App
