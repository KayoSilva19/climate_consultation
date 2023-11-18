export function ClimaAtual({ clima }) {
  return (
    <div className="mt-4 bg-blue-700 rounded p-4 drop-shadow-md text-zinc-50 flex-wrap gap-4 flex items-center font-medium  justify-center">
      <h3 className="text-[2rem]">{clima.name}:</h3>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}°C</p>
      <p>{clima.weather[0].description}</p>
    </div>
  )
}
