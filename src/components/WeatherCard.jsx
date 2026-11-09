
import { interpretarClima } from "../utils/weatherCode";

function WeatherCard({ weather, city }) {
  const clima = interpretarClima(
    weather.weather_code,
    weather.is_day
  );

  const horario = new Date(weather.time).toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "short"
  });

  return (
    <section className="weather-card">
      <div className="weather-location">
        <span>📍</span>
        <div>
          <h2>{city.name}</h2>
          <p>
            {city.admin1 ? `${city.admin1}, ` : ""}
            {city.country}
          </p>
        </div>
      </div>

      <div className="weather-main">
        <span className="weather-icon">{clima.icone}</span>

        <div>
          <h1>
            {Math.round(weather.temperature_2m)}
            <span>°C</span>
          </h1>

          <p>{clima.descricao}</p>
        </div>
      </div>

      <p className="weather-date">
        Atualizado em: {horario}
      </p>

      <div className="weather-message">
        Confira as condições climáticas da sua cidade.
      </div>
    </section>
  );
}

export default WeatherCard;
