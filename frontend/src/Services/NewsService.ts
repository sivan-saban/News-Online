import axios from 'axios';
import appConfig from '../Utils/AppConfig';

class NewsService {

  public async getNews(): Promise<any> {
  
    const response = await axios.get<any[]>(appConfig.newsIlUrl );

      return response.data;
    }

    public async getCategories(): Promise<any> {

      const response = await axios.get<any[]>(`https://newsapi.org/v2/top-headlines?category=il&apiKey=aa8e2f88a7ad4ba390fabd7635a5bee8`);
      
      return response.data;

    }
  }
const newsService = new NewsService();

export default newsService;