
function WeatherDetails({ weather }) {
  return (
    <section className="weather-details">

      <div className="detail-card">
        <span className="detail-icon">🌡️</span>
        <div>
          <p>Sensação térmica</p>
          <h3>
            {Math.round(weather.apparent_temperature)}°C
          </h3>
        </div>
      </div>

      <div className="detail-card">
        <span className="detail-icon">💧</span>
        <div>
          <p>Umidade do ar</p>
          <h3>
            {weather.relative_humidity_2m}%
          </h3>
        </div>
      </div>

      <div className="detail-card">
        <span className="detail-icon">💨</span>
        <div>
          <p>Velocidade do vento</p>
          <h3>
            {weather.wind_speed_10m} km/h
          </h3>
        </div>
      </div>

    </section>
  );
}

export default WeatherDetails;
