import axios from 'axios';
import appConfig from '../Utils/AppConfig';
import WeatherModel from '../Model/weatherModel';

class WeatherService {

  public async getWeatherByCity(city:string): Promise<any> {

    if (typeof city !== 'string'|| !city) {
      throw new Error('Invalid arguments');
    }

    const body =
    {
      "city" : city
    }

    try{
    const response = await axios.post<WeatherModel>(appConfig.weatherUrl , body);
      return response.data;
    }catch (error) {
      console.log('Error fetching weather data:', error);
    }
  }

}
const weatherService = new WeatherService();

export default weatherService;