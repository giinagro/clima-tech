
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

// Busca a cidade pelo nome
export async function buscarCidade(nomeCidade) {
  const resposta = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(nomeCidade)}&count=1&language=pt&format=json`
  );

  if (!resposta.ok) {
    throw new Error("Erro ao buscar cidade.");
  }

  const dados = await resposta.json();

  if (!dados.results || dados.results.length === 0) {
    throw new Error("Cidade não encontrada. Tente novamente.");
  }

  return dados.results[0];
}

// Busca o clima utilizando latitude e longitude
export async function buscarPrevisao(latitude, longitude) {
  const parametros = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",
    timezone: "auto",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh"
  });

  const resposta = await fetch(`${WEATHER_URL}?${parametros}`);

  if (!resposta.ok) {
    throw new Error("Não foi possível consultar o clima.");
  }

  return await resposta.json();
}
