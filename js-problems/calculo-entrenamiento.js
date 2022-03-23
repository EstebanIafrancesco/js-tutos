// Cual debe ser el incremento del entrenamiento
// Variables importantes
// volumen, intensidad, pulsaciones-antes-del-entreno, horas-de-sueño-previas
// resistencia, fuerza, velocidad, elasticidad

// Por lo tanto para ir progresando, puedes dividir la intensidad en franjas, de la siguiente forma:

// -65% al 70% Primeras cuatro semanas resistencias
// -70% al 75% Semana cinco a ocho resistencias
// -75% al 80% Semana nueve a doce resistencias

function reservFrequency(p_min, p_max) {
  return p_max - p_min;
}

function trainingZones(p_min, p_max) {
  let zones = [
    {
      Zone: 'zone 1',
      Freq_inf: p_min + reservFrequency(p_min, p_max) * 0.5,
      Freq_sup: p_min + reservFrequency(p_min, p_max) * 0.6
    },
    {
      Zone: 'zone 2',
      Freq_inf: p_min + reservFrequency(p_min, p_max) * 0.6,
      Freq_sup: p_min + reservFrequency(p_min, p_max) * 0.7
    },
    {
      Zone: 'zone 3',
      Freq_inf: p_min + reservFrequency(p_min, p_max) * 0.7,
      Freq_sup: p_min + reservFrequency(p_min, p_max) * 0.8
    },
    {
      Zone: 'zone 4',
      Freq_inf: p_min + reservFrequency(p_min, p_max) * 0.8,
      Freq_sup: p_min + reservFrequency(p_min, p_max) * 0.9
    },
    {
      Zone: 'zone 5',
      Freq_inf: p_min + reservFrequency(p_min, p_max) * 0.95,
      Freq_sup: p_min + reservFrequency(p_min, p_max)
    },
  ];
  return zones;
}

console.table(trainingZones(55, 181));
