export function Previsao({ previsoes }) {
  return (
    <div className="mt-4">
      <h4 className="font-medium text-[1.6rem]">
        Previsão para as <span className="text-blue-800">próximas horas.</span>
      </h4>
      <ul className="flex flex-col gap-4 mt-4 text-zinc-700">
        {previsoes.map((previsao) => {
          return (
            <li
              className="bg-zinc-200 flex items-center p-2 gap-2 hover:bg-blue-200 font-medium rounded"
              key={previsao.dt}
            >
              <img
                src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                alt={previsao.weather[0].description}
              />
              <span>
                {previsao.main.temp}°C - {previsao.weather[0].description}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
