import axios from 'axios';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather`;

async function getWeatherData(zip) {
  try {
    const weather = await axios(`${BASE_URL}?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
    return weather;
  } catch(error) {
    console.log(error);
  }
}

export default getWeatherData;
