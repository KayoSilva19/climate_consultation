export function Busca({ cidade, setCidade, buscarClima }) {
  return (
    <div>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={buscarClima}>Buscar</button>
    </div>
  )
}
