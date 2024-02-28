class WeatherModel {
    public city?: {
        coord?: {lat: number; lon: number};
        country?: string;
        id?: number;
        name?: string ;
        population?: number;
        sunrise?: number;
        sunset?: number;
        timezone?: number;
    };
    public list?: [{
      dt_txt :string;
      main:{
        feels_like:number;
        temp:number;
        temp_max: number;
        temp_min: number;
      }
      weather: [{
      description: string;
      icon: string ;
      id: number; 
      main: number;
    }];
    wind:
    {speed: number, deg: number, gust: number}
    }];
    
}

export default WeatherModel;
