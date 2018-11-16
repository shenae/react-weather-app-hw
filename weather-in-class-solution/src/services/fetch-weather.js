import axios from 'axios';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather`;

export async function getWeatherData(zip) {
  try {
    const weather = await axios(`${BASE_URL}?zip=${zip}&units=imperial&appid=a629659de4127bd88c656bc41f8fca76`);
    return weather;
  } catch(error) {
    console.log(error);
  }
}

export async function getForecast() {
  
}

//note that .env just looks like this:
//REACT_APP_API_KEY=a629659de4127bd88c656bc41f8fca76
