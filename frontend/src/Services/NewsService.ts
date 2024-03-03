import axios from 'axios';
import appConfig from '../Utils/AppConfig';

class NewsService {

  public async getNews(): Promise<any> {
  
    const response = await axios.get<any[]>(appConfig.newsIlUrl );

      return response.data;
    }

    public async getNewsByCategories(category:string): Promise<any> {
  
      const body =
      {
        "category" : category
      }
  
      try{
      const response = await axios.post<string>(appConfig.newsBycategoryUrl , body);
        return response.data;
      }catch (error) {
        console.log('Error fetching weather data:', error);
      }
    }

    
    }
  
const newsService = new NewsService();

export default newsService;