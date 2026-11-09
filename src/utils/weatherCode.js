
export function interpretarClima(codigo, isDay = 1) {
  const condicoes = {
    0: {
      descricao: "Céu limpo",
      icone: isDay ? "☀️" : "🌙"
    },

    1: {
      descricao: "Predominantemente limpo",
      icone: isDay ? "🌤️" : "🌙"
    },

    2: {
      descricao: "Parcialmente nublado",
      icone: "⛅"
    },

    3: {
      descricao: "Nublado",
      icone: "☁️"
    },

    45: {
      descricao: "Neblina",
      icone: "🌫️"
    },

    48: {
      descricao: "Neblina com geada",
      icone: "🌫️"
    },

    51: {
      descricao: "Garoa leve",
      icone: "🌦️"
    },

    53: {
      descricao: "Garoa moderada",
      icone: "🌦️"
    },

    55: {
      descricao: "Garoa intensa",
      icone: "🌧️"
    },

    61: {
      descricao: "Chuva leve",
      icone: "🌧️"
    },

    63: {
      descricao: "Chuva moderada",
      icone: "🌧️"
    },

    65: {
      descricao: "Chuva intensa",
      icone: "🌧️"
    },

    71: {
      descricao: "Neve leve",
      icone: "🌨️"
    },

    73: {
      descricao: "Neve moderada",
      icone: "🌨️"
    },

    75: {
      descricao: "Neve intensa",
      icone: "❄️"
    },

    80: {
      descricao: "Pancadas de chuva leves",
      icone: "🌦️"
    },

    81: {
      descricao: "Pancadas de chuva moderadas",
      icone: "🌧️"
    },

    82: {
      descricao: "Pancadas de chuva fortes",
      icone: "⛈️"
    },

    95: {
      descricao: "Tempestade",
      icone: "⛈️"
    },

    96: {
      descricao: "Tempestade com granizo",
      icone: "⛈️"
    },

    99: {
      descricao: "Tempestade forte com granizo",
      icone: "⛈️"
    }
  };

  return condicoes[codigo] || {
    descricao: "Condição desconhecida",
    icone: "🌡️"
  };
}
