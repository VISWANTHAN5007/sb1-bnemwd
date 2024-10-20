import axios from 'axios';

const WEATHER_API_KEY = 'your_weather_api_key';
const TRAFFIC_API_KEY = 'your_traffic_api_key';

export const fetchWeatherData = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export const fetchTrafficData = async (city: string) => {
  try {
    const response = await axios.get(`https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${TRAFFIC_API_KEY}&point=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic data:', error);
    return null;
  }
};