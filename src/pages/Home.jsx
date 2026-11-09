
import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";

import {
  buscarCidade,
  buscarPrevisao
} from "../services/weatherApi";

function Home() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Função responsável pela pesquisa
  async function pesquisarClima(nomeCidade) {
    try {
         setWeather(null);
        setCity(null);

      const cidadeEncontrada = await buscarCidade(nomeCidade);

      const previsao = await buscarPrevisao(
        cidadeEncontrada.latitude,
        cidadeEncontrada.longitude
      );

      setCity(cidadeEncontrada);
      setWeather(previsao.current);

    } catch (erro) {
      setError(erro.message);
    } finally {
      setLoading(false);
    }
  }

  // Carrega uma cidade quando o site é aberto
  useEffect(() => {
    pesquisarClima("São Paulo");
  }, []);

  return (
    <main className="home">

      <header className="header">
        <div className="logo">
          <span>☀️</span>
          <h1>Clima Tech</h1>
        </div>

        <p>O clima da sua cidade em um só lugar.</p>
      </header>

      <div className="content">

        <div className="welcome">
          <span>PREVISÃO DO TEMPO</span>
          <h2>Como está o tempo hoje?</h2>
          <p>
            Pesquise sua cidade e descubra as condições
            climáticas atuais.
          </p>
        </div>

        <SearchBar
          onSearch={pesquisarClima}
          loading={loading}
        />

        {loading && (
          <p className="status-message">
            Consultando informações meteorológicas...
          </p>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && weather && city && (
          <div className="weather-content">

            <WeatherCard
              weather={weather}
              city={city}
            />

            <h3 className="details-title">
              Detalhes do clima
            </h3>

            <WeatherDetails weather={weather} />

          </div>
        )}

      </div>

      <footer className="footer">
        <p>
          © 2026 Clima Tech | Dados meteorológicos por Open-Meteo
        </p>
      </footer>

    </main>
  );
}

export default Home;
