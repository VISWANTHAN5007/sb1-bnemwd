interface PredictionInput {
  date: string;
  location: string;
  weather: string;
  trafficDensity: number;
}

interface PredictionOutput {
  riskLevel: 'Low' | 'Medium' | 'High';
  probability: number;
  contributingFactors: string[];
}

export const predictAccidentRisk = (input: PredictionInput): PredictionOutput => {
  // This is a mock prediction. In a real scenario, this would call a backend ML service.
  const randomProbability = Math.random();
  let riskLevel: 'Low' | 'Medium' | 'High';
  
  if (randomProbability < 0.3) riskLevel = 'Low';
  else if (randomProbability < 0.7) riskLevel = 'Medium';
  else riskLevel = 'High';

  return {
    riskLevel,
    probability: randomProbability,
    contributingFactors: ['Weather', 'Traffic Density', 'Time of Day']
  };
};