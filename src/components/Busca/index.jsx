export function Busca({ cidade, setCidade, buscarClima }) {
  return (
    <div className="mt-4 flex gap-4 ">
      <input
        type="text"
        className="w-full border border-zinc-500 rounded py-2 px-4"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button
        className="bg-blue-800 px-4 rounded text-zinc-50 font-medium hover:bg-blue-500 hover:-translate-y-2 duration-700 transform-all"
        onClick={buscarClima}
      >
        Buscar
      </button>
    </div>
  )
}
